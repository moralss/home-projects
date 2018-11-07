let secret = "dbnnf45d";
const { getUserById} = require("../queries/user");

module.exports = function(passport) {
  let JwtStrategy = require("passport-jwt").Strategy;
   let ExtractJwt = require("passport-jwt").ExtractJwt;

  let opts = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: secret
  };

  const loginIn = new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
      user = await getUserById(jwt_payload.sub);
        if (user.id === jwt_payload.sub) {
          console.log("found user");
          return done(null, user);
        } else {
          console.log("cannot find user");
          return done(null, false);
      }
    } catch (e) {}
  });

  passport.use(loginIn);
};
