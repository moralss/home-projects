const passport = require("passport");
const { getAuthorByUserId } = require("../src/queries/author");
const { likeBlog, dislikeBlog } = require("../src/command/profile")


const jwtDecript = passport.authenticate("jwt", { session: false });

const profileRoutes = app => {
  app.get("/profile", jwtDecript, async (req, res) => {
    const userId = req.user.id;
    const userProfile = await getAuthorByUserId(userId);
    res.json(userProfile).end();

  });



  app.get("/likes", jwtDecript, async (req, res) => {
    const { id } = req.user;
    
    const isLiked = await checkLiked();
    res.status(201).end();
    try {


      // await likeBlog(id, blogId);
    } catch (e) {
      console.log("ERRO ", e);
      res.status(500).end();
    }
  });


  app.post("/likes", jwtDecript, async (req, res) => {
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
