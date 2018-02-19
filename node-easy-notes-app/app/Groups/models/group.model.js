let mongoose = require('mongoose');

let groupSchema = mongoose.Schema({
		groupName: String,
		groupMembers: Number
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Group',groupSchema);