let Note = require('../models/note.model.js');

exports.create = (req,res)=>{
	
	let note = new Note({title: req.body.title || "Untitled", content: req.body.content || "hello"});
	note.save((err,data)=>{
		console.log(data);
		res.send(data);
	});

};

exports.findAll = (req,res)=>{
	Note.find((err,notes)=>{
		res.send(notes);
	});
};

exports.findOne = (req,res)=>{
	Note.findById(req.params.id, (err,data)=>{
		res.send(data);
	});
};

exports.update = (req,res)=>{
	Note.findById(req.params.id, (err,note)=>{
		note.title = req.body.title;
		note.content = req.body.content;
		note.save((err,data)=>{
			res.send(data);
		});
	});
};

exports.delete = (req,res)=>{
	Note.remove({_id: req.params.id}, (err,data)=>{
		res.send({message: "Note deleted"});
	});
};
