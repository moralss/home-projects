const chai = require("chai");
var expect = chai.expect;

const { createUser } = require("../src/command/create-user");
const { clearTable } = require("./helpers");

describe("blog_share", function () {
    afterEach(async function () {
        await clearTable("authors")
        
        await clearTable("users");
    });


    const fakeUser = {
        email: "jfsjafffsbfmfff@gmail.com",
        author: "sfsfafffsmbefdf says",
        password: "fsmfffbsorafdsl"
    };

    describe("Save command ", () => {
        it.only("Should be able to save a new user to the database", async function () {
            const userId = await createUser(fakeUser);
            console.log(userId);
            expect(userId).to.be.gt(0);
        });
    });
});




