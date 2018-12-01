const chai = require("chai");
var expect = chai.expect;
const { getClient } = require('../src/db')
const { fakeUser, fakeUser1, fakeUser2, fakeUser3 } = require("./fake/fakeData");
const { createUser } = require("../src/command/create-user");
const { createBlog } = require("../src/command/blog");
const { creatAuthor } = require("../src/command/create-author");
const { clearTable } = require("./helpers");
const { updateBlog } = require("../src/command/blog");
describe("blog_share ", function () {

    after(async function () {
        await clearTable();
    });


    describe("Save command ", () => {
        it("Should be able to save a new user to the database", async function () {
            const userIdfakeUser = await createUser(fakeUser);
            expect(userIdfakeUser).to.be.gt(0);
        });

        it("Should be able to save a new blog to the database ", async function () {
            const blogText = { text: "text" }
            const userId = await createUser(fakeUser1);
            const authorId = await creatAuthor(["author", userId]);
            const blogId = await createBlog(blogText, authorId);

            expect(blogId).to.be.gt(0);
        })


        it("Should be able to update a blog post to the database ", async function () {
            const blogText = { text: "text1" }
            const userId = await createUser(fakeUser3);
            const authorId = await creatAuthor(["author2", userId]);
            const blogId = await createBlog(blogText, authorId);
            const blogInfo = { text: "update blog", id: blogId };
            const updatedBlogId = await updateBlog(blogInfo);
            expect(updatedBlogId).to.be.gt(0);
        })
    });

});




