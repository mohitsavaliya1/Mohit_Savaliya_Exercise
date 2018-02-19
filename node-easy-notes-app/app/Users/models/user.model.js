let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
		name: String,
		password: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('User',userSchema);