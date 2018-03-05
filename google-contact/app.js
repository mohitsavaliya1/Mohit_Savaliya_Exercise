require('dotenv').load();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const session = require("cookie-session");
const passport = require('passport');
const db = require("./models");
const User = require('./models/user.js');
const googleContacts = require('google-contacts-oauth');
const request = require('request');

app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(session({secret:process.env.SECRET_KEY}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.cookieParser('your secret here'));
require("./routes/users.js")(passport);

//localhost is redirect to the google accounts login page.
app.get("/", function(req,res){
  res.redirect("/auth/google");
});

//request token and gets code from it's url. Now we can use this code to fetch all the contacts of google-contact. 
app.get('/auth/google/callback/', function(req, res) {
 request('https://www.googleapis.com/oauth2/v4/token',
   { method:'POST',
   form:{ 
    'code':req.query.code,
    'client_id':'624800714981-ngd9ins9ilcue2gvkp6e11ofnng83igt.apps.googleusercontent.com',
    'client_secret':'RumzArbalv1IFcZyTqCEl8yH', 
    'redirect_uri':'http://localhost:3000/auth/google/callback/', 
    'grant_type':'authorization_code'
  }, 
  json:false 
}, (function(err, response, body){ 
  let accessToken = JSON.parse(body).access_token;
  console.log(typeof(accessToken)); 
  let opts = { token: accessToken };
  googleContacts(opts, function(err, data){
    console.log(data);
     res.send(data);
  });
}));
});

//to authenticate user through google and asks the permissions of accessing contacts.          
app.get('/auth/google',
 passport.authenticate('google', 
   { scope : ['https://www.googleapis.com/auth/userinfo.profile',
   'https://www.googleapis.com/auth/userinfo.email',
   'https://www.googleapis.com/auth/plus.login',
   'https://www.google.com/m8/feeds'], 
   accessType: 'offline',
   approvalPrompt: 'force', 
   redirect_uri:'http://localhost:3000/auth/google/callback/' 
 })); 

//logout
app.get('/logout', function(req,res){
    req.logout()
    res.send('logged out!')
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});





































//app.get("/welcome", (req,res) => {
 //res.send(req.user.google); 
 //res.redirect("https://contacts.google.com/");
 //res.redirect("https://www.google.com/contacts/u/0/?cplus=0#contacts");
 /*res.writeHead(301,
  {Location: 'https://contacts.google.com/'}
);
response.end();*/
 //res.redirect("view-source:https://contacts.google.com/");
 /* let contacts = new GoogleContacts({ token : req.user.google.token });
  console.log("aaaaaaa", contacts);

  contacts.getContacts(function(err, contacts) {
        res.send(contacts);
  });*/
//let contacts = new GoogleContacts();
/*contacts.refreshAccessToken(req.refreshToken , function(err, function(err,newToken)) {
    // ...
});*/
  //res.render("index");

//});

     // app.get('/auth/google',
     // passport.authenticate('google',
        // { scope : ['profile', 'email'],
        // successRedirect : '/profile_git', 
        // failureRedirect : '/' // }));
         // the callback after google has authenticated the user 
       //}



/*app.get('/auth/google',
  passport.authenticate('google', { 
    scope : ['profile', 'email'],
    successRedirect : '/welcome',
      failureRedirect : '/' 
     }
));

app.get('/auth/google/callback',
 passport.authenticate('google', {
      successRedirect : '/welcome',
      failureRedirect : '/' }
  )
);*/