let express = require("express");
let router = express.Router();
let db = require("../models");
let authMiddleware = require("../middleware/auth")
let passport = require('passport')
//+let GithubStrategy = require('passport-github2').Strategy;
let LocalStrategy  = require('passport-local').Strategy;
let User           = require('../models/user.js');
let githubStrategy = require('passport-github').Strategy;
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

    passport.use(new githubStrategy({

        clientID: "c8ca1bdd43ad4e86219a",
  		clientSecret: "4330dcab45b687cc2d8ddf4a9687f2e08ca34c65",
  		callbackURL: "http://localhost:3000/auth/github/callback"

    },
    function(token, refreshToken, profile, done) {

        process.nextTick(function() {
            User.findOne({ 'github.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    return done(null, user);
                } else {
                    
                   	let newUser = new User();

                    newUser.github.id    = profile.id;
                    newUser.github.token = token;
                    newUser.github.name  = profile.displayName;
                    newUser.github.email = profile.emails[0].value;

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




