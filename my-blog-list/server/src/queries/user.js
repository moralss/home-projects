const { getClient } = require("../db");

const getUser = async email => {
  const client = await getClient();
  console.log("email" , email);
  // let fakemail = 'big';

  let statement = `SELECT * FROM users WHERE  name = $1`;
  const res = await client.query(statement, [email]);
  
  try {
    await client.end();
    return res.rows[0];

  } catch (e) {
    await client.end();
    return { message: "user not found!" };
  }
};

module.exports = {
  getUser
};
