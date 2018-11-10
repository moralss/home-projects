const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");
const { creatAuthor } = require("./create-author");
const createUser = async user => {
  let { email, password, author } = user;

  const client = await getClient();
  let userStatement = `INSERT INTO users(email ,  hashed_password)  VALUES($1 , $2 )  RETURNING id `;

  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword];
    let user = await client.query(userStatement, userParameters);

    const id = user.rows[0].id;
    let authorParameters = [author, id];    
    creatAuthor(authorParameters);
  } catch (e) {
    console.log(e);
  }

  await client.release();
};

module.exports = {
  createUser
};
