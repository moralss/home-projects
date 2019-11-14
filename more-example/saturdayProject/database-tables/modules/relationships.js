const authors = require("./authors");
const books = require("./books");

authors.hasMany(books);
books.belongsTo(authors);
