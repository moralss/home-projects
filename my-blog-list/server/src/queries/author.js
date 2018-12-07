const { getClient } = require("../db");

const getAuthor = async name => {
    const client = await getClient();
    let statement = `SELECT * FROM authors WHERE  name = $1`;
    const res = await client.query(statement, [name]);
    try {   
        await client.release();
        return res.rows[0];
    } catch (e) {
        await client.release();
        return false
    }
};


module.exports = { getAuthor };