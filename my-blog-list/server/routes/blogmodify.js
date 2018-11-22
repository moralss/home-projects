const { jwtCheck } = require("../src/auth/jwtCheck");
const { editBlogPost, deleteBlog } = require("../src/queries/blog");

const blogModify = app => {

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

module.exports = { blogModify };
