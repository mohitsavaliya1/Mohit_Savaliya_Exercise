let express = require("express");
let router = express.Router();
let db = require("../models");
let passport = require('passport')
let LocalStrategy  = require('passport-local').Strategy;
let User           = require('../models/user.js');
let githubStrategy = require('passport-github').Strategy;


module.exports = function(passport) {

    //to serialize user
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    //to deserialize user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        })
    });

    //login or sign up through github
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
                    //if user exists
                    return done(null, user);
                } else {
                    
                    //creats new users and make entry it in database
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




