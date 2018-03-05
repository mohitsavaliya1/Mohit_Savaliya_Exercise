module.exports = (app) =>{

	let users = require('../Controller/users.controller.js');
	let session = require("cookie-session");
	
	app.use(session({
		secret: 'mohit'
	}));

	app.get('/', users.start);

	app.get('/profile', users.profile);

	app.post('/signup', users.create);

	app.post('/login', users.login);

	app.get('/welcome', users.loginRequired, users.welcome);

	app.get('/users/:userName', users.findOne);

	app.get('/logout', users.logout);

	app.get('/users', users.pagination);

}