const secret = '35ffdf46hh';
const User = require('./users');

module.exports = function (passport) {
    let JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;

    let opts = {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: secret
    }

    const loginIn = new JwtStrategy(opts, function (jwt_payload, done) {
        console.log('jwt ', jwt_payload.sub);

        User.findOne({ _id: jwt_payload.sub }, function (err, user) {
            if (err) {
                console.log(err);
                return done(err, false);
            }
            if (user) {
                console.log("found user")
                return done(null, user);

            } else {
                console.log("cannot find user");
                return done(null, false);
                // or you could create a new account
            }
        });
    });


    passport.use(loginIn);





}    
