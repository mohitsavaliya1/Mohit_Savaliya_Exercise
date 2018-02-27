let express = require("express");
let router = express.Router();
let db = require("../models");
let authMiddleware = require("../middleware/auth")
let passport = require('passport')
let LocalStrategy  = require('passport-local').Strategy;
let User           = require('../models/user.js');
let googleStrategy = require('passport-google-oauth2').Strategy;
let configAuth     = require('../middleware/auth.js');


module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        })
    });

    passport.use(new googleStrategy({

        clientID: "624800714981-ngd9ins9ilcue2gvkp6e11ofnng83igt.apps.googleusercontent.com",
  		clientSecret: "RumzArbalv1IFcZyTqCEl8yH",
  		callbackURL: "http://localhost:3000/auth/google/callback/"

    },
    function(token, refreshToken, profile, done) {

        process.nextTick(function() {
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    return done(null, user);
                } else {
                    
                   	let newUser = new User();

                    newUser.google.id =  profile.id;
                    newUser.google.token = token;
                    newUser.google.name = profile.displayName;
                    newUser.google.email = profile.emails[0].value;
                    
                    console.log("aaaaaaaaaaaaaaaaaaaa", profile.displayName);

                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));

};


