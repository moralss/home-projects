const { getProfile } = require("../src/queries/profile");
const { jwtCheck } = require("../src/auth/jwtCheck");
const { createBlog  , updateBlog,} = require("../src/command/blog");
const { editBlogPost, deleteBlog } = require("../src/queries/blog");
const { getLatestBlog } = require("../src/queries/blog");

const passport = require("passport");

const blogRoute = app => {
  app.post("/blog", jwtCheck, async (req, res) => {
    try {
      const profile = await getProfile(req.user.id);
      await createBlog(req.body, profile.id);
      res.sendStatus(201).end();
    } catch (e) {
      console.log(e);
      res.sendStatus(500).end();
    }
  });

  app.get("/blog", jwtCheck, async (req, res) => {
    try {
      const profile = await getProfile(req.user.id);
      console.log(profile);
      const latestBlog = await getLatestBlog(profile.id);
      res.json(latestBlog).end();
    } catch (e) {
      console.log(e);
      res.send(500).end();
    }
  });

  app.delete("/blog", async (req, res) => {
    let blogId = req.body.id;
    try {
      const profile = await deleteBlog(blogId);
      res.send(201).end();
    } catch (e) {
      console.log(e);
      res.send(500).end();
    }
  });

  app.get("/editblog/:id", jwtCheck, async (req, res) => {
    const editBlog = Number(req.params.id);
    try {
      const blog = await editBlogPost(editBlog);
      console.log(editBlog);
      res.send(blog).end();
    } catch (e) {
      console.log(e);
    }
  });

  app.put("/editblog", jwtCheck , async (req, res) => {
    const updatedBlog = req.body;
    try {
      await updateBlog(updatedBlog);
      res.send(201).end();
    } catch (e) {
      console.log(e);
      res.send(500);
    }
  });
};

module.exports = { blogRoute };
