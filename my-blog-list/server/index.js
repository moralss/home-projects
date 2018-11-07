const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const blog = require("./routes/blogs");
const user = require("./routes/user");
require("./src/auth/passport")(passport);
const app = express();

const middleware = passport.authenticate("jwt", { session: false });

// { "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYXQiOjE1NDEyNTgwMDEwMjh9.S8WjKDmOK0Cox6UK3yRx54tJn_H2bfTjaunedYWy-xg"


require("./src/auth/Auth")(passport);
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

blog.blogRoute(app);
user.UserRoutes(app);


app.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  
  res.send("working").end();

});

let port = 3001;
app.listen(port, function() {
  console.log(`serving running on ${port}`);
});
