const { jwtCheck } = require("../src/auth/jwtCheck");
const _ = require('lodash');
const { returnBlogInfo } = require("../src/helper-func/blogInfo");

const authorInfoRoute = app => {

    app.get("/authorinfo/:authorid", jwtCheck, async (req, res) => {
        const authorid = req.params.authorid;

        try {
            let blogsForAuthor = await returnBlogInfo(authorid);
            res.json(blogsForAuthor);

        } catch (e) {
            console.log(e);
            res.status(500).json({ error: "server errror" })
        }

    });

};

module.exports = { authorInfoRoute };
