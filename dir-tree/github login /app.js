require('dotenv').load();
let express = require("express")
let app = express()
let methodOverride = require("method-override")
let morgan = require("morgan")
let bodyParser = require("body-parser");
let userRoutes = require("./routes/users");
let session = require("cookie-session");
let flash = require("connect-flash")
let passport = require('passport')
let db = require("./models");
let GithubStrategy = require('passport-github2').Strategy;

app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(session({secret:process.env.SECRET_KEY}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.cookieParser('your secret here'));
require("./routes/users.js")(passport);

app.get("/", function(req,res){
  res.redirect("/auth/github");
});

app.get("/welcome", function(req,res){
  res.send('Logged In!')
});

//to authenticate user through github
app.get('/auth/github',
    passport.authenticate('github'),
    function(req, res){}
);

//receives callback for success and failure redirect.
app.get('/auth/github/callback',
  passport.authenticate('github', {
      successRedirect: '/welcome',
      failureRedirect: '/' 
  }),
  function(req, res) {
    res.redirect("/welcome");
  }

);

//logout
app.get('/logout', function(req,res){
    req.logout()
    res.send('logged out!')
});


app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});