const { jwtCheck } = require("../src/auth/jwtCheck");
const { updateBlog } = require("../src/command/blog");
const { editBlogPost, deleteBlog,
  deleteComments,  deleteProfile } = require("../src/queries/modify-blog");


const blogModify = app => {

  app.delete("/blog", async (req, res) => {
    let blogId = req.body.id;
    try {
      await deleteProfile(blogId);
      await deleteComments(blogId);      
      await deleteBlog(blogId);
      res.status(201).end();
    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  });

  app.get("/editblog/:id", jwtCheck, async (req, res) => {
    const editBlog = Number(req.params.id);

    try {
      const blog = await editBlogPost(editBlog);
      res.send(blog).end();
    } catch (e) {
      console.log(e);
    }
  });

  app.put("/editblog", jwtCheck, async (req, res) => {
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
