let User = require('../models/user.models.js');

  
//call at start time and redirect to login page
exports.start = (req,res)=>{
    req.session.userName = null;
    res.redirect('/users/login');
}

//create a new user(singup)
exports.create = (req,res)=>{
    
    let user =  new User({userName: req.body.userName, password: req.body.password});
    //user.password = await user.bcryptPass(req.body.password);
    user.save((err,data)=>{
		console.log(data);
		res.send(data);
	});
    
};

//find all users
exports.findAll =  (req,res)=>{
    User.find((err,users)=>{
        res.send(users);
    });
};

//pagination
exports.pagination = async (req,res)=>{
    try{
        if(req.query.page && req.query.pagesize && req.session.userName){       
            let users = await User.find().skip(Number(req.query.page)).limit(Number(req.query.pagesize));
            res.send(users);
        }
    
       else{
            res.status(400).send("send page number and pagesize in query");
        }
    }catch(err){
        console.log("error");
    }
}



//find one user by userName. (one can find any other user's information if that user is logged in)  
exports.findOne = async (req,res) => {
    try{
        if(req.session.userName){
            let user = await User.find({userName: req.params.userName});
            if(user){
                res.send(user); 
            }
            else{
                res.send("User Not Found");
            }
        }
        else{
            res.send("Log-in Required");
        }
    }catch(err){
            console.log("error");
    }
} 

//login 
exports.login = function(req,res,next){
	User.findOne({userName: req.body.userName}).then(function(user){
        user.comparePassword(req.body.password, function(err, isMatch){
            if(isMatch){
                req.session.userName = req.body.userName; 
                res.redirect('/welcome');             
            } else {
                req.session.userName = null;
                res.send('failed');
            }
        })
    }, function(err){
        res.send(err)
    })
};

//gives the name of the logged in user
exports.profile = (req,res)=>{
    if(req.session.userName){
        res.send(req.session.userName);    
    }
    else{
        res.send("not found");
    }
}

//logout
exports.logout = (req,res) =>{
    req.session.userName = null;
    res.send("Logged Out");
}

//welcome msg
exports.welcome = (req,res)=>{
	res.send("welcome to app page");
}

//middleware for login required
exports.loginRequired = (req,res,next) =>{
    if(!req.session.userName){
        res.redirect('/login');
    } else {
        next();
    }
}

//middleware for ensuring correct user
exports.ensureCorrectUser = (req, res, next) => {
    if(req.params.userName !== req.session.userName){
        res.redirect(`/users/${req.session.userName}`);
    } else {
        next();
    }
}





