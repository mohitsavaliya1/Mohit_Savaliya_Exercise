module.exports = (app) =>{

	let groups = require('../controller/group.controller.js');

	app.post('/groups',groups.create);

	app.get('/groups',groups.findAll);

	app.get('/groups/:id', groups.findOne);

	app.put('/groups/:id', groups.update);

	app.delete('/groups/:id', groups.delete);

}