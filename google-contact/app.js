require('dotenv').load();
let express = require("express")
let app = express()
let methodOverride = require("method-override")
let morgan = require("morgan")
let bodyParser = require("body-parser");
let userRoutes = require("./routes/users");
let session = require("cookie-session");
let authMiddleware = require("./middleware/auth")
let passport = require('passport');
let db = require("./models");
let User = require('./models/user.js');
let GoogleContacts = require('google-contacts-api');


app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(session({secret:process.env.SECRET_KEY}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.cookieParser('your secret here'));
require("./routes/users.js")(passport);

app.get("/", function(req,res){
  res.redirect("/auth/google");
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id, function(err, user) {
    done(err, user);
  });
});



app.get("/welcome", (req,res) => {
 //res.send(req.user.google); 
 res.redirect("https://contacts.google.com/");
 /* let contacts = new GoogleContacts({ token : req.user.google.token });
  console.log("aaaaaaa", contacts);

  contacts.getContacts(function(err, contacts) {
        res.send(contacts);
  });*/

});



app.get('/auth/google',
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
);

app.get('/logout', function(req,res){
    req.logout()
    res.send('logged out!')
});

app.listen(3000, function(){
  console.log("Server is listening on port 3000");
});