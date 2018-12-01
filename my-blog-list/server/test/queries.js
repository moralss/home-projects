const chai = require("chai");
var expect = chai.expect;
const { getClient } = require('../src/db')
const { createUser } = require("../src/command/create-user");
// const { fakeUserForQuering1 } = require("./fake/fakeData");
const { clearTable } = require("./helpers");
const { getUser } = require("../src/queries/user");

describe("blog_share ", function () {
    after(async function () {
        // await clearTable();
        const client = await getClient();
        await client.query(`delete from users`);

    });

    const fakeUserForQuering1 = {
        email: "d@gddmail.com",
        author: "fddddnys",
        password: "fnfdddsl"
    };

    describe("Check queries", () => {

        it.only("Should be able get a  user by his email from the database", async function () {

            const userId = await createUser(fakeUserForQuering1);
            const user = await getUser("d@gddmail.com");
            console.log(user);
            expect(fakeUserForQuering1.email).equal(user.email);

        });

    });

});




