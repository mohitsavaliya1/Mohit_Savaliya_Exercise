let User = require('../models/user.model.js');

exports.create = (req,res)=>{
	let user = new User({name: req.body.name, password: req.body.password});
	user.save((err,data)=>{
		console.log(data);
		res.send(data);
	});
};

exports.findAll = (req,res)=>{
	User.find((err,users)=>{
		res.send(users);
	});
};

exports.findOne = (req,res)=>{
	User.findById(req.params.id, (err,data)=>{
		res.send(data);
	});
};

exports.update = (req,res)=>{
	User.findById(req.params.id, (err,user)=>{
		user.name = req.body.name;
		user.password = req.body.password;
		user.save((err,data)=>{
			res.send(data);
		});
	});
};

exports.delete = (req,res)=>{
	User.remove({_id: req.params.id}, (err,data)=>{
		res.send({message: "User deleted"});
	});
};