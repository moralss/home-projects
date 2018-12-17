const { getProfile } = require("../src/queries/profile");
const { jwtCheck } = require("../src/auth/jwtCheck");
const { createBlog } = require("../src/command/blog");
const { getAuthorBlogs, showAllBlogs } = require("../src/queries/blog");
const _ = require('lodash');

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
      const latestBlog = await getAuthorBlogs(profile.id);
      res.json(latestBlog).end();
    } catch (e) {
      console.log(e);
      res.send(500).end();
    }
  });

  app.get("/allblogs", async (req, res) => {
    try {
      const allBlogs = await showAllBlogs();
      const blogs = _.uniqBy(allBlogs, 'name');
      res.json(blogs).end();
    } catch (e) {
      console.log(e);
      res.send(500).end();
    }
  });
};

module.exports = { blogRoute };
