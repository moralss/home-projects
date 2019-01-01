const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const blog = require("./routes/blogs");
const user = require("./routes/user");
const blogModify = require("./routes/blogmodify");
const authorInfo = require("./routes/author-info");
const profile2 = require("./routes/profile2");


require("./src/auth/passport")(passport);
const profile = require("./routes/profile");

const app = express();
const { getUser } = require("./src/queries/user");


// { "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYXQiOjE1NDEyNTgwMDEwMjh9.S8WjKDmOK0Cox6UK3yRx54tJn_H2bfTjaunedYWy-xg"

require("./src/auth/Auth")(passport);
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

profile2.profile2Routes(app);
profile.profileRoutes(app);
blog.blogRoute(app);
user.UserRoutes(app);
authorInfo.authorInfoRoute(app);
blogModify.blogModify(app);


app.get("/", (req, res) => {
  res.send(req.user).end();
});

let port = 3001;
app.listen(port, function () {
  console.log(`serving running on ${port}`);
});
