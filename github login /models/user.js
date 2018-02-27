let mongoose = require("mongoose");
let bcrypt = require("bcrypt");

let userSchema = new mongoose.Schema({
    github: {
        id: String,
        token: String,
        email:String,
        name:String
    }
});

userSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10).then(function(hashedPassword) {
        user.password = hashedPassword
        next();
    }, function(err){
        return next(err)
    })
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return next(err);
        next(null, isMatch);
    });
};

let User = mongoose.model('User', userSchema);
module.exports = User;