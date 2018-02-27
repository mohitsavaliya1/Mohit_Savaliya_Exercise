"use strict"
let mongoose = require("mongoose");


let userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

let bcryptPassword = require('./../../../.././utils/bcrypt.user.password.js')(userSchema);

module.exports = mongoose.model("User", userSchema);






