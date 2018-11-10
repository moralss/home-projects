const { createBlog } = require("../src/command/create-blog");
const { getProfile } = require("../src/queries/profile");
const { jwtCheck } = require("../src/auth/jwtCheck");

const blogRoute = app => {
  app.post("/blog", jwtCheck, async (req, res) => {
    try {
      const profile = await getProfile(req.user.id);
      console.log(profile.id);
      const newUser = await createBlog(req.body, profile.id);

      res.sendStatus(201).end();
    } catch (e) {
      console.log(e);
      res.sendStatus(500).end();
    }

    // let blogInfo = req.body;
    // try {
    //   const blogId = await createBlog(blogInfo);
    //   console.log(blogId);

    //   res.sendStatus(201).end();
    // } catch (e) {
    //   res.sendStatus(500).end();
    // }
  });
};

module.exports = { blogRoute };
