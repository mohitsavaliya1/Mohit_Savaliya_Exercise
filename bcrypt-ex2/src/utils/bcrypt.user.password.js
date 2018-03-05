let bcrypt = require("bcrypt");
 
exports.bcryptPass = function(str,callback){
    var SALT_WORK_FACTOR = 10;
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return callback(err);
        // hash the password using our new salt
        bcrypt.hash(str, salt, function(err, hash) {
            if (err) return callback(err);
            callback(null,hash);
        });
    });
}



//module.exports = (schema) =>{

	//update user password with hashedPassword before saving it in schema.  
	/*schema.pre('save',(next)=>{
	    let user = this;
	    if(!user.isModified('password')) return next();
	    bcrypt.hash(user.password, 16).then(function(hashedPassword) {
	        user.password = hashedPassword;
	        next();
	    }, function(err) {
	        return next(err);
	    })

	});*/ 

	//compare user password using bcrypt.
/*	schema.methods.comparePassword = (candidatePassword, next) => {
	    bcrypt.compare(candidatePassword, this.password, function(err,data) {
	        if(err) {
	            return next(err);
	        }
	        next(null,data);
		});
	};
*/
//}

/*exports.bcryptPass = async (user,next) => {	
	try{
		let hashedPassword = await bcrypt.hash(user.password,16);
		user.password = hashedPassword;
		console.log(hashedPassword);	    
    	next();
	}catch(err){
    	return next(err);
	}
}*/
