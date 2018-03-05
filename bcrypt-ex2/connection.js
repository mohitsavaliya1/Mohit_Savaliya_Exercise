let dbConfig = require('./config/development.js');
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect(dbConfig.url,{});
mongoose.connection.on('error',()=>{
	console.log("can't find server");
});

mongoose.connection.once('open', ()=>{
	console.log("server started");
});

module.exports = mongoose;