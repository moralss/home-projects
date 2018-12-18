const passport = require("passport");
const { getTotalLikes } = require("../src/queries/profile")


const jwtDecript = passport.authenticate("jwt", { session: false });

const profile2Routes = app => {

    app.get("/likes/:blogId", jwtDecript, async (req, res) => {
        const { blogId } = req.params;

        try {
            const totalLikes = await getTotalLikes(blogId);
            return res.json(totalLikes[0]).end();
        } catch (e) {
            console.log(e);
            res.json(e).end();
        }
    });

};

module.exports = { profile2Routes };
