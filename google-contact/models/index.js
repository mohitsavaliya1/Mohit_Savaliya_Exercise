var mongoose = require("mongoose");
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/google-login')
mongoose.Promise = Promise

module.exports.User = require("./user")