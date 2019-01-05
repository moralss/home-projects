const passport = require("passport");
const { getTotalLikes } = require("../src/queries/profile")

const jwtDecript = passport.authenticate("jwt", { session: false });
const profile2Routes = app => {

    app.get("/likes/:blogId", jwtDecript, async (req, res) => {
        const { blogId } = req.params;

        try {
            const totalLikes = await getTotalLikes(blogId);
            if (totalLikes[0].sum == null) {
                return res.json({ sum: 0 }).end();
            }

            return res.json(totalLikes[0]).end();
        } catch (e) {
            console.log(e);
            res.json(e).end();
        }
    });

};

module.exports = { profile2Routes };
