const { getClient } = require('../../src/db')

const clearTable = async () => {
    try {
        const client = await getClient();
        await client.query(`delete from blogs`);
        await client.query(`delete from authors`);
        await client.query(`delete from users`);
        client.release()
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    clearTable
}