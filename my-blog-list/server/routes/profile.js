const passport = require("passport");
const { getAuthorByUserId } = require("../src/queries/author");
const { checkLiked } = require("../src/queries/profile")
const { likeBlog, dislikeBlog } = require("../src/command/profile")


const jwtDecript = passport.authenticate("jwt", { session: false });

const profileRoutes = app => {
  app.get("/profile", jwtDecript, async (req, res) => {
    const userId = req.user.id;
    const userProfile = await getAuthorByUserId(userId);
    res.json(userProfile).end();
  });


  app.get("/like", jwtDecript, async (req, res) => {
    const author = await getAuthorByUserId(req.user.id);
    try {
      const isLiked = await checkLiked(author.id);
      if (isLiked.length > 0) {
        return res.json({ liked: isLiked[0].likes }).end();
      }

      return res.json({ liked: 0 }).end();
    } catch (e) {
      console.log("ERRO ", e);
      res.json(e).end();
    }
  });

  app.post("/like", jwtDecript, async (req, res) => {
    const { id } = req.user;
    let { blogId } = req.body;

    try {
      await likeBlog(id, blogId);
      res.status(201).end();
    } catch (e) {
      console.log("ERRO ", e);
      res.status(500).end();
    }
  });

  app.put("/like", jwtDecript, async (req, res) => {
    const author = await getAuthorByUserId(req.user.id);

    try {
      await dislikeBlog(author.id, blogId);
      res.status(201).end();
    } catch (e) {
      console.log("ERRO ", e);
      res.status(500).end();
    }
  })


  app.post("/like", jwtDecript, async (req, res) => {
    const { id } = req.user;
    let { blogId } = req.body;

    try {
      await likeBlog(id, blogId);
      res.status(201).end();
    } catch (e) {
      console.log("ERRO ", e);
      res.status(500).end();
    }
  });


  // app.put("/likes", jwtDecript, async (req, res) => {
  //   let { blogId, authorId } = req.body;

  //   try {
  //     await dislikeBlog(authorId, blogId);
  //     res.status(201).end();
  //   } catch (e) {
  //     console.log("ERRO ", e);
  //     res.status(500).end();
  //   }
  // });



};

module.exports = { profileRoutes };
