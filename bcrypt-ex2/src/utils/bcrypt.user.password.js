let bcrypt = require("bcrypt");

/*let user = require('./server/apis/User/models/user.models.js');
*/
module.exports = (userSchema) =>{

	userSchema.pre('save', function(next){
	    let user = this;
	    if(!user.isModified('password')) return next();
	    bcrypt.hash(user.password, 16).then(function(hashedPassword) {
	        user.password = hashedPassword;
	        next();

	    }, function(err) {
	        return next(err);
	    })

	}); 

	userSchema.methods.comparePassword = function(candidatePassword, next) {
	    bcrypt.compare(candidatePassword, this.password, function(err,data) {
	        if(err) {
	            return next(err);
	        }
	        next(null,data);
	});
	 

	};

}