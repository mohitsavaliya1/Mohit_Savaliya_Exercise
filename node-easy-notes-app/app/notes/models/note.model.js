let mongoose = require('mongoose');

let noteSchema = mongoose.Schema({
		title: String,
		content: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Note',noteSchema);