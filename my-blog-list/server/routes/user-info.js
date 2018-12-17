const { jwtCheck } = require("../src/auth/jwtCheck");
const _ = require('lodash');
const { showAllBlogs } = require("../src/queries/blogs");

const userInfoRoute = app => {

    app.get("/userinfo/:authorid", jwtCheck, async (req, res) => {
        const authorid = req.params.authorid;

        try {
            const allBlogs = await showAllBlogs();
            const authorsBlogs =
                allBlogs.filter(element => { return element.author_id == authorid });
            res.json(authorsBlogs);

        } catch (e) {
            console.log(e);
            res.status(500).json({ error: "server errror" })
        }

    });

};

module.exports = { userInfoRoute };
