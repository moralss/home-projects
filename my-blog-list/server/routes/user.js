
const { createUser } = require("../src/command/create-user");
const passport = require("passport");
const { getUser } = require("../src/queries/user");
const { createToken } = require("../src/auth/createToken");
const jwt = require("jwt-simple");

let middeware = passport.authenticate("local");

const UserRoutes = app => {
  app.post("/login", middeware, async (req, res) => {
    let { email } = req.body;

    try {
      const user = await getUser(email);
      let token = createToken(user.id);
      res.send({ token }).end();
    } catch (e) {
      res.send(400).end();
    }
  });

  app.post("/signin", async (req, res) => {
    const userDetails = req.body;
    try {
      await createUser(userDetails);
      let user = await getUser(userDetails.email);
      let token = createToken(user.id);
      res.send({ token }).end();
    } catch (e) {
      res.send(401).end();
      console.log(e);
    }
  });

  // let secret = "dbnnf45d";
  // const jsonWebToken = jwt.decode(token, secret);


};



module.exports = { UserRoutes };
