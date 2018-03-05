const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require('passport')
const User           = require('../models/user.js');
const googleStrategy = require('passport-google-oauth2').Strategy;


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

    //creating a new user or login the pre signed up user to our app.
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
                    //if user exists
                    return done(null, user);
                } else {
                    //creating a new user
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


