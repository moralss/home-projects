const { jwtCheck } = require("../src/auth/jwtCheck");
const _ = require('lodash');
const { getBlogsForAuthor } = require("../src/queries/blogs");

const authorInfoRoute = app => {

    app.get("/authorinfo/:authorid", jwtCheck, async (req, res) => {
        const authorid = req.params.authorid;

        try {
            const blogsForAuthor = await getBlogsForAuthor(authorid);
            res.json(blogsForAuthor);

        } catch (e) {
            console.log(e);
            res.status(500).json({ error: "server errror" })
        }

    });

};

module.exports = { authorInfoRoute };
