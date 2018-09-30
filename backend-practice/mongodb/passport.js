const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./users');




module.exports = function (passport) {

    passport.use(new LocalStrategy(function (username, password, done) {
        let query = { username: username };
        User.findOne(query, function (err, user) {
            if (err) throw err;
            if (!user) {
                console.log('user not found');
                return done(null, false, { message: 'No User found' });
            }

            console.log('user', user);
            bcrypt.compare(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    console.log("match");
                    return done(null, user, { message: 'correct password' });
                } else {
                    console.log("wrong Password");
                    return done(null, false, { message: 'Wrong password' });
                }
            })
        })
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    })

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        })
    })
}




