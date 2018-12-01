const { getClient } = require("../db");

const creatAuthor = async parameters => {
  const client = await getClient();

  try {
    let statement = `INSERT INTO authors(name , user_id) VALUES($1 , $2) RETURNING id`;
    let res = await client.query(statement, parameters);
    const id = res.rows[0].id;
    await client.release();
    return id;

  } catch (e) {
    console.log(e);
    await client.release();
    return
  }

};

module.exports = {
  creatAuthor
};
