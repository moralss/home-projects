const { getClient } = require("../db");

const getUser = async email => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  email = $1`;
  const res = await client.query(statement, [email]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return 
  }
};

const getUserById = async (id) => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  id = $1`;
  const res = await client.query(statement, [id]);
  try {
    await client.release();
    return res.rows[0];
  } catch (e) {
    await client.release();
    return 
  }

};



module.exports = {
  getUser, 
  getUserById, 
};
