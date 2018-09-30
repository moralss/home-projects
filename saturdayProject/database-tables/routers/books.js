const sequelize = require('sequelize');
const Books = require('../modules/books');
const bodyParser = require("body-parser");

module.exports = function (app) {
    app.use(bodyParser.json());

    app.post('/books', async (req, res) => {

        const bookName = await req.body.name;
        const pages = req.body.pages;
        const bookGenre = req.body.bookGenre;
        const authorsId = req.body.authorsId;

            await Books.build({
                name: bookName,
                pages: pages,
                book_genre: bookGenre,
                authors_id: 1
            }).save();

        res.send(201);
    })


    app.get('/books', async (req, res) => {
        // const books = await Books.findOne({where: {name :'javascript for dummies'}});
        const books = await Books.findAll();
        res.send(books);
    })
}

