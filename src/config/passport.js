var passport = require('passport');



module.exports = function(app){

    app.use(passport.initialize());
    app.use(passport.session());

    //serialize: to bundle up user with the session(usually, we store the ID)

    //deserialize: to pull the user back out of the session.

    //Passport User Functions

    // * passport.serializeUser()
    // * passport.deserializeUser()
    // * passport-local

    passport.serializeUser(function(user,done) {
        done(null, user);

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
        require('./strategies/local.strategy')();
    });

};