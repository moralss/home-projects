const { createUser } = require("../src/command/create-user");

const passport = require("passport");
const { getUser } = require("../src/queries/user");
const { createToken } = require("../src/auth/createToken");
const { validateRegisterUser } = require("../src/validations/register");
let middeware = passport.authenticate("local");


const UserRoutes = app => {
  app.post("/login", middeware, async (req, res) => {
    console.log("login", req.body);

    let { email } = req.body;

    try {
      const user = await getUser(email);
      let token = createToken(user.id);
      res.send({ token }).end();
    } catch (e) {
      console.log(e)
      res.send(500).end();
    }
  });


  app.post("/signin", async (req, res) => {
    const userDetails = req.body;
    console.log(userDetails);
    const { errors, isValid } = await validateRegisterUser(userDetails);
    console.log("isValid :", isValid);

    if (!isValid) {
      return res.status(400).json({ errors }).end();
    }

    try {
      await createUser(userDetails);
      let user = await getUser(userDetails.email);
      let token = createToken(user.id);
      return res.send({ token }).end();
    } catch (e) {
      console.log(e);
      return res.send(401).end();
    }
  });

  // let secret = "dbnnf45d";
  // const jsonWebToken = jwt.decode(token, secret);

};



module.exports = { UserRoutes };
