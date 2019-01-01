const passport = require("passport");
const { getAuthorByUserId } = require("../src/queries/author");
const { checkLiked } = require("../src/queries/profile")
const { likeBlog, updateAuthorLike } = require("../src/command/profile")


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
      console.log("isLiked" , isLiked);

      if (isLiked.length > 0) {
        return res.json({ liked: isLiked[0].likes }).end();
      }

      return res.json({ liked: 0 }).end();
    } catch (e) {
      console.log(e);
      res.json(e).end();
    }
  });

  app.post("/like", jwtDecript, async (req, res) => {
    let { id } = req.user;
    let { blogId } = req.body;
    try {
      const author = await getAuthorByUserId(id);
      const isLiked = await checkLiked(author.id);
      
      if (isLiked.length !== 0) {
        await updateAuthorLike(1, author.id, blogId);
        return res.status(203).end();
      } else {
        await likeBlog(id, blogId);
        return res.status(201).end();
      }

    } catch (e) {
      console.log(e);
    }

  });

  app.put("/like", jwtDecript, async (req, res) => {
    const { blogId } = req.body;
    const author = await getAuthorByUserId(req.user.id);

    try {
      await updateAuthorLike(0, author.id, blogId);
      return res.status(203).end();
    } catch (e) {
      console.log("ERRO ", e);
      return res.status(500).end();
    }
  })

};

module.exports = { profileRoutes };
