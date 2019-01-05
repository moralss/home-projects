const { createUserAndAuthor } = require("../src/command/user");
const bcrypt = require("bcryptjs");
const { getUser } = require("../src/queries/user");
const { createToken } = require("../src/auth/createToken");
const { validateRegisterUser } = require("../src/validations/register");


const UserRoutes = app => {
  app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    const user = await getUser(email);
    if (!user) {
      return res.status(404).json({ email: "user not found" });
    }

    try {
      const isMatch = await bcrypt.compare(password, user.hashed_password);
      if (!isMatch) {
        return res.status(400).json({ password: "Password is incorrect" });
      }

      let token = createToken(user.id , "user");
      return res.status(201).json({ token });

    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }


  });


  app.post("/signin", async (req, res) => {
    const userDetails = req.body;
    const { errors, isValid } = await validateRegisterUser(userDetails);

    if (!isValid) {
      return res.status(400).json({ errors }).end();
    }

    try {
      await createUserAndAuthor(userDetails);
      let user = await getUser(userDetails.email);
      let token = createToken(user.id , "user");
      return res.send({ token }).end();
    } catch (e) {
      console.log(e);
      return res.send(401).end();
    }
  });

};



module.exports = { UserRoutes };
