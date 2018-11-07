const { createUser } = require("../src/command/create-user");
const passport = require("passport");
const jwt = require("jwt-simple");
let secret = "dbnnf45d";
const {getUser} = require("../src/queries/user");

function tokenForUser(user) {
  console.log("issue token for " , user);
  const timestamp = new Date().getTime();  
  return jwt.encode({ sub: 1, lat: timestamp }, secret);
}

const UserRoutes = app => {
  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );

  app.post("/signin", async (req, res) => {
    const userDetails = req.body;
    try {
      await createUser(userDetails);
      let user = await getUser(userDetails.email);       
      const timestamp = new Date().getTime();        
      token = jwt.encode({ sub: user.id, lat: timestamp }, secret)
      res.send({ "token" : token}).end();

    } catch (e) {
      res.send(401).end();
      console.log(e);
    }


  });
};

module.exports = { UserRoutes };
