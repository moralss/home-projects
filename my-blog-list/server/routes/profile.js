const passport = require("passport");
const { getProfile } = require("../src/queries/profile");
const jwt = require("jwt-simple");
const jwtDecript = passport.authenticate("jwt", { session: false });


const profileRoutes = app => {
  app.get("/profile", jwtDecript, async (req, res) => {
    const userId = req.user.id;
    
    const userProfile = await getProfile(userId);
    res.json(userProfile).end();

  });

  // let secret = "dbnnf45d";
  // const jsonWebToken = jwt.decode(token, secret);
};

module.exports = { profileRoutes };
