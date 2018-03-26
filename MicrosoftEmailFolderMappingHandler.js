let ENVIRONMENT = process.env.NODE_ENV;
if(ENVIRONMENT === '' || ENVIRONMENT === undefined){
	ENVIRONMENT = 'environments/development';
}
let CONFIG = require('../config/' + ENVIRONMENT + '.js');
global.CONFIG = CONFIG;
let path = require('path');
let rootPath = __dirname + '/..';
let directorySeparator = '/';
let lodash = require('lodash');
let q = require('q');
let async = require('async');
let sequelize = require('sequelize');
global.Q = q;
let jobHandlers = require('./index');
let request = require('request');

let BullQueue = jobHandlers.SetupQueue(CONFIG);
global.BullQueue = BullQueue;

let MicrosoftEmailFolderMappingHandler = BullQueue.MicrosoftEmailFolderMapping;

let connectionInfo = {};



MicrosoftEmailFolderMappingHandler.process('MicrosoftEmailFolderMapping',(queueObj,done)=>{
	let jobObject = queueObj.data;
	let accessToken = jobObject.accessToken;
	let email = jobObject.email;
	let hostname = jobObject.hostname;
	let userId = jobObject.userId;

	//SQL Connection
	if(!connectionInfo[hostname]){
		connectionInfo[hostname] = {
			sequelize:null,
			models:{}
		};
		let Sequelize = require('sequelize');
		connectionInfo[hostname].sequelize = new Sequelize(hostname.replace(/\./g,'_'),CONFIG.mysql.username,CONFIG.mysql.password,{
			dialect:'mysql',
			port:CONFIG.mysql.port,
			host:CONFIG.mysql.host,
			pool:{
				max:1,
				min:0,
				idle:1000
			},
			logging:CONFIG.mysql.debug ? console.log:CONFIG.mysql.debug, //logger.info
			isolationLevel:Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
		});
		connectionInfo[hostname].models = jobHandlers.SetupModel(connectionInfo[hostname].sequelize);
	}

	let models = connectionInfo[hostname].models;

	connectionInfo[hostname].sequelize.authenticate()
	.then(function(){
		console.log('fetching mail folders');
		fetchMailFoldersOfOutlook(accessToken)
		.then(function(mailFoldersObj){
			console.log('Mapping of mail folders');
			return createMappingForMailFolders(mailFoldersObj, userId, models);
		})
		.then(function(res){
			console.log('done Mapping of mail folders');
			done(null,true);			
			return res;
		})
		.catch(function(err){
			console.log(err);
		})
	})
	.then(function(){
		console.log('fetching mails');
		fetchMailsOfOutlook(accessToken)
		.then(function(mails){
			console.log('Mapping of mails');
			return createMappingForMails(mails, userId, models);
		})
		.then(function(res){
			console.log('done mapping of mails');
			done(null,true);
			return res;
		})
		.catch(function(err){
			console.log(err);
		})
	});

});




function sendAPIRequest(method,url,queryParams,headers,formBody,body){
    let deferred = q.defer();
    request(url,{
        method:method,
        form:formBody,
        qs:queryParams,
        headers:headers,
        json:(body !== undefined && body !== null)
    },function(error,response,responseBody){
        if(error){
            console.log("in error", error);
            deferred.reject(error);
        }else{
            if(typeof responseBody == 'string'){
                responseBody = JSON.parse(responseBody);
            }
            deferred.resolve(responseBody);
        }
    });
    return deferred.promise;
}

function fetchMailFoldersOfOutlook(accessToken){
	let defer = q.defer();
	let folderDetailsUrls= 'https://graph.microsoft.com/v1.0/me/mailFolders/';
	let headers = {
		'content-type':'application/json',
		'Authorization':`Bearer ${accessToken}` 
	};
	sendAPIRequest('GET', folderDetailsUrls, {}, headers, {})
	.then(function(response){
		console.log(response);
		defer.resolve(response);
	})	
	.catch(function(err){
		defer.reject(err);
	});
	return defer.promise;
}

function createMappingForMailFolders(mailFoldersObj, userId, models){
	let i=0;
	let defer = q.defer();
	let mailFolders = mailFoldersObj.value;
	
	async.whilst(function(){
		return i < mailFolders.length;
	}, function(nextMailFolder){

			let mailFolder = mailFolders[i];
			if(mailFolder.displayName === 'Deleted Items'){
				mailFolder.displayName = 'Trash';
			}
			if(mailFolder.displayName === 'Sent Items'){
				mailFolder.displayName = 'Sent';
			}
			return models.EmailFolder.update({syncedFolderId:mailFolder.id},{
				where:{
					owner:userId,
					name:mailFolder.displayName.toUpperCase()
				}}
			)
			.then(function(){
				console.log(`updated mail folder ${i}`);
				i++;
				nextMailFolder();
			})
			.catch(function(err){
				i++;
				console.log(err);
				nextMailFolder();
			});

		},function(err, res){
			if(err){
				defer.reject(err);
			}
			else{
				defer.resolve(res);
			}
		}	
	
	);
	
	return defer.promise;
}

function fetchMailsOfOutlook(accessToken){
	let defer = q.defer();   
	let messageDetailsUrls= 'https://graph.microsoft.com/v1.0/me/messages/';
	let headers = {
		'content-type':'application/json',
		'Authorization':`Bearer ${accessToken}`
	};
	sendAPIRequest('GET', messageDetailsUrls, {}, headers, {})
	.then(function(response){
		console.log(response);
		defer.resolve(response);
	})	
	.catch(function(err){
		defer.reject(err);
	});
	return defer.promise;
}

function createMappingForMails(mailsObj, userId, models){
	let i=0;
	let defer = q.defer();
	let mails = mailsObj.value;

	async.whilst(function(){
		return i<mails.length;
	},  function(nextMail){
			let mail = mails[i];
			return models.Email.update({
					threadId:mail.conversationId,  //updating threadId and nylasId in Email DB
					nylasId:mail.id
				},
				{where:{
					owner:userId,
					messageId:mail.internetMessageId
				}}
			).then(function(){
				console.log(`updated messages ${i}`);
				i++;
				nextMail();
			})
			.catch(function(err){
				i++;
				console.log(err);
				nextMail();
			});
			
		},function(err, res){
			if(err){
				defer.reject(err);
			}
			else{
				defer.resolve(res);
			}
		}	
	
	);

	return defer.promise;
}