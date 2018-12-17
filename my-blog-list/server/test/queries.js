const chai = require("chai");
var expect = chai.expect;

// const { getClient } = require('../src/db')
const { createUser, createUserAndAuthor } = require("../src/command/user");
const { clearTable } = require("./helpers");
const { getUser } = require("../src/queries/user");
const { getUserById } = require("../src/queries/user")
const { getAuthor } = require("../src/queries/author");
const { createBlog } = require("../src/command/blog");
const { getAuthorBlogs } = require("../src/queries/blog");

describe("blog_share ", function () {
    after(async function () {
        await clearTable();

    });

    const fakeUser = {
        email: "d@gddmail.com",
        password: "fnfdddsl"
    };

    const fakeUser1 = {
        email: "df@gddmail.com",
        password: "fndddsl"
    };


    const fakeUser3 = {
        email: "moral@gmail.com",
        author: "moral",
        password: "moral"
    };


    const fakeUser4 = {
        email: "ffmol@gmail.com",
        author: "mdoral",
        password: "vmoral"
    };


    describe("Check queries", () => {
        it("Should be able get a  user by his email from the database", async function () {
            await createUser(fakeUser.email, fakeUser.password);
            const searchedUser = await getUser("d@gddmail.com");
            expect(fakeUser.email).equal(searchedUser.email);
        });


        it("Should be able get a  user by his id from the database", async function () {
            const userId = await createUser(fakeUser1.email, fakeUser1.password);
            const searchedUserById = await getUserById(userId);
            expect(fakeUser1.email).equal(searchedUserById.email);
            expect(userId).equal(searchedUserById.id);
        });



        it("Should be able get a author by his name from the database", async function () {
            await createUserAndAuthor(fakeUser3);
            const author = await getAuthor("moral");
            expect(fakeUser3.author).equal(author.name);
        });




        it("Should be able get a authors blogs , form the database", async function () {
            const blogText = { text: "new blog" }
            const authorId = await createUserAndAuthor(fakeUser4);
            const blogId = await createBlog(blogText, authorId);
            const author = await getAuthorBlogs(authorId);
            expect(blogId).equal(author[0].id);
        });
    });
});




