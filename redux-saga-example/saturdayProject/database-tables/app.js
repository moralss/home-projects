const express = require("express");
const sequelize = require("sequelize");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const relationships = require("./modules/relationships");
const Authors = require("./modules/authors");
const Books = require("./modules/books");


require('./routers/authors')(app);
app.use(bodyParser.json());

require('./routers/books')(app);


app.get('/authorsbooks/:searchterm?', async (req, res) => {
    const searchTerm = req.params['searchterm']
    console.log("search term", searchTerm);


    var authorsBooks = await Authors.findAll({
        attributes: ["name", "age"],
        include: [{
            model: Books,
            attributes: ["name", "pages"],
            required: true,
        }]
    });

    res.send(authorsBooks);

});

app.use(cors());








app.listen(3003);

console.log("server running on port 3003");

