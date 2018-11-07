const { getClient } = require("../db");

const getUser = async email => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  email = $1`;
  const res = await client.query(statement, [email]);
  try {
    await client.end();
    return res.rows[0];
  } catch (e) {
    await client.end();
    return { message: "user not found!" };
  }
};

const getUserById = async (id) => {
  const client = await getClient();
  let statement = `SELECT * FROM users WHERE  id = $1`;
  const res = await client.query(statement, [id]);
  try {
    await client.end();
    return res.rows[0];
  } catch (e) {
    await client.end();
    return { message: "user not found!" };
  }

};


const getUsers = async () => {
  const client = await getClient();
  let statement = `SELECT id , hashed_password , name from users`;
  const res = await client.query(statement, [email]);
  try {
    await client.end();
    return res.rows;

  } catch (e) {
    await cliuserent.end();
    return { message: "user not found!" };
  }
};

module.exports = {
  getUser, 
  getUsers,
  getUserById, 
};
