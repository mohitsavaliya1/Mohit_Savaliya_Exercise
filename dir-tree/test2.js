const Promise = require('bluebird');
const request = require('request');

const options = { url: 'https://icanhazdadjoke.com/search?term=dad',
 headers: { 'Accept': 'application/json' } };

// const get = async (username) =>{

	

// 	try{
// 		request(options, (req,res)=>{
// 			console.log(res);
// 		})
// 		let x = await Promise.fromNode(cb => { 		
			
// 		});
// 		console.log(x);
// 	}catch(err){
// 		console.log(err);
// 	}
// }


// get('lalit');
const get = async () => Promise.fromNode(cb => {
	  request(options, (err, resp, payload) => {
	    cb(err, payload); // resp is an Http#IncomingMessage, payload is the parsed version
	  });
	});
const x = async ()=>{
	console.log(get());
	try{
		let test = get().then(function(data) {
			console.log(data);
		});
		
	}catch(err){
		console.log(err);
	}
}

x();

