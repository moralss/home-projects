const { getClient } = require("../db");
const creatAuthor = async details => {
  const client = await getClient();

  try {
    let statement = `INSERT INTO authors(name , user_id) VALUES($1 , $2)`;
    await client.query(statement, details);
  } catch (e) {
    console.log(e);
  }

  await client.end();
};

module.exports = {
  creatAuthor
};
