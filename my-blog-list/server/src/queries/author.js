const { getClient } = require("../db");

const getAuthorName = async name => {
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

const getAuthorByUserId = async userId => {
    const client = await getClient();
    let statement = `SELECT * FROM authors WHERE  user_id = $1`;
    const res = await client.query(statement, [userId]);
    try {
      await client.release();
      return res.rows[0];
    } catch (e) {
      await client.release();
      return;
    }
  };

module.exports = { getAuthorName , getAuthorByUserId};