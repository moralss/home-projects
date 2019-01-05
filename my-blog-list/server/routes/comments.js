const passport = require("passport");
const { saveComment } = require("../src/command/comments")
const { getAllComments } = require("../src/queries/comments");

const jwtDecript = passport.authenticate("jwt", { session: false });

const commentsRoutes = app => {


    app.post("/comments/:blogid", jwtDecript, async (req, res) => {
        let { id } = req.user;
        let blogid = req.params.blogid;
        let { text } = req.body.data;
        let blogIdInt = Number(blogid);

        try {
            await saveComment({ id, blogIdInt, text });
            const comments = await getAllComments(blogIdInt);
            return res.json(comments).end();

        } catch (e) {
            console.log(e);
        }
    });


    app.get("/comments/:blogid", jwtDecript, async (req, res) => {
        let blogid = req.params.blogid;
        let blogIdInt = Number(blogid);

        try {
            const comments = await getAllComments(blogIdInt);
            return res.json(comments).end();

        } catch (e) {
            console.log(e);
            return res.status(500).end();
        }
    });



};

module.exports = { commentsRoutes };
