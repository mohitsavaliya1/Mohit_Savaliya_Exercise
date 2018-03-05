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

let bcryptPassword = require('./../../../.././utils/bcrypt.user.password.js');

userSchema.pre('save', (next) => {
    let user = this;
    bcryptPassword.bcryptPass(user);
    next();
}); 

module.exports = mongoose.model("User", userSchema);
