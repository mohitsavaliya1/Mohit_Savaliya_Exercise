module.exports = (app) =>{

	let users = require('../Controller/users.controller.js');
	let session = require("cookie-session");
	/*let passport = require("passport");
	let LocalStrategy = require('passport-local').Strategy;*/
	

	app.use(session({
		secret: 'what does this do?'
	}));

/*	app.use(passport.initialize());

	app.use(passport.session());*/

	app.get('/', users.start);

	app.get('/users/person', users.person);

	app.post('/users/signup', users.create);

	app.post('/login', users.login);

	app.get('/welcome', users.loginRequired, users.welcome);

	app.get('/users/:userName', users.findOne);

	app.get('/users/logout', users.logout);

	app.get('/users', users.pagination);


	
}