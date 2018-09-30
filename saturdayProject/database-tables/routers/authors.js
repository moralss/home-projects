const sequelize = require('sequelize');
const Authors = require('../modules/authors');
const bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.json());

    app.post('/authors', async (req, res) => {
        const authorName = req.body.name;
        const authorAge = req.body.age;
        console.log(req.body);

        await Authors.build({
            name: authorName,
            age: authorAge

        }).save();
        res.send(201);
    })

    app.put('/authors', async (req, res) => {
        const updateName = req.body.name;
        console.log(updateName);
        
        let updateValues = { name: updateName };
        Authors.update(updateValues, { where: { id: 1 } }).then((result) => {
            console.log(result);
        });

        res.send(201);
    })


    app.get('/authors', async (req, res) => {
        const authors = await Authors.findAll();
        res.send(authors);
    })
}

