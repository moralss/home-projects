const { getAuthorByUserId } = require("../src/queries/author");
const { jwtCheck } = require("../src/auth/jwtCheck");
const { createBlog } = require("../src/command/blog");
const { getAuthorBlogs, showAllBlogs } = require("../src/queries/blogs");
const _ = require('lodash');
const { returnUserBlogInfo } = require("../src/helper-func/userBlogInfo");


const blogRoute = app => {
  app.post("/blog", jwtCheck, async (req, res) => {
    try {
      const authorInfo = await getAuthorByUserId(req.user.id);
      await createBlog(req.body, authorInfo.id);
      res.sendStatus(201).end();
    } catch (e) {
      console.log(e);
      res.sendStatus(500).end();
    }
  });

  app.get("/blog", jwtCheck, async (req, res) => {
    try {
      const authorInfo = await getAuthorByUserId(req.user.id);
      // const blogs = await getAuthorBlogs(authorInfo.id);
      // console.log("blog")


      let blogsForUser = await returnUserBlogInfo(authorInfo.id);
      console.log("blogsForUser", blogsForUser);
      return res.json(blogsForUser).end();

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
