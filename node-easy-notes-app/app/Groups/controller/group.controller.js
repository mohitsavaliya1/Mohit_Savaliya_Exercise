let Group = require('../models/group.model.js');

exports.create = (req,res)=>{
	let group = new Group({groupName: req.body.groupName, groupMembers: req.body.groupMembers});
	group.save((err,data)=>{
		console.log(data);
		res.send(data);
	});
};

exports.findAll = (req,res)=>{
	Group.find((err,groups)=>{
		res.send(groups);
	});
};

exports.findOne = (req,res)=>{
	Group.findById(req.params.id, (err,data)=>{
		res.send(data);
	});
};

exports.update = (req,res)=>{
	Group.findById(req.params.id, (err,group)=>{
		group.groupName = req.body.groupName;
		group.groupMembers = req.body.groupMembers;
		group.save((err,data)=>{
			res.send(data);
		});
	});
};

exports.delete = (req,res)=>{
	Group.remove({_id: req.params.id}, ()=>{
		res.send({message: "Group deleted"});
	});
};