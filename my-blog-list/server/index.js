const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const blog = require("./routes/blogs");
const user = require("./routes/user");
require("./src/auth/passport")(passport);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

blog.blogRoute(app);
user.UserRoutes(app);

app.get("/", function(req, res) {
  res.send("working");
});

let port = 3001;
app.listen(port, function() {
  console.log(`serving running on ${port}`);
});
