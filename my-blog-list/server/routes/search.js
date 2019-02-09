const _ = require('lodash');
const { getSearchResults } = require("../src/queries/searchAuthor");


const searchRoutes = app => {
    app.get("/search/:name", async (req, res) => {
        let name = req.params.name;

        try {
            const allBlogs = await getSearchResults(name)
            const blogs = _.uniqBy(allBlogs, 'name');
            res.json(blogs).end();
        } catch (e) {
            console.log(e);
            res.send(500).end();
        }
    });



};



module.exports = { searchRoutes };
