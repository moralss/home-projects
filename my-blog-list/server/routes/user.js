const { createUser } = require("../src/command/create-user");
const passport = require("passport");

const UserRoutes = app => {
  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/"
    })
  );

  app.post("/signin", (req, res) => {
    try {
      createUser(req.body);
      res.send(201).end();
    } catch (e) {
      res.send(401).end();
      console.log(e);
    }
  });
};

module.exports = { UserRoutes };
