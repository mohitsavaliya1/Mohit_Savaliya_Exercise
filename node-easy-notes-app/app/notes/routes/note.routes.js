module.exports = (app) =>{

	let notes = require('../controller/note.controller.js');

	app.post('/notes',notes.create);

	app.get('/notes',notes.findAll);

	app.get('/notes/:id', notes.findOne);

	app.patch('/notes/:id', notes.update);

	app.delete('/notes/:id', notes.delete);

}