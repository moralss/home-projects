const { getClient } = require("../db");
const { bcryptPassword } = require("../auth/bcryptPassword");
const { creatAuthor } = require("./author");

const createUser = async (email, password) => {
  const client = await getClient();
  let userStatement = `INSERT INTO users(email ,  hashed_password)  VALUES($1 , $2 )
    RETURNING id `;

  try {
    const hashedPassword = await bcryptPassword(password);
    let userParameters = [email, hashedPassword];
    let user = await client.query(userStatement, userParameters);
    await client.release();
    const id = user.rows[0].id;
    return id;
  } catch (e) {
    console.log(e);
  }

  await client.release();
};


const createUserAndAuthor = async user => {
  const client = await getClient();

  let { email, password, author } = user;
  try {

    let userId = await createUser(email, password);
    let authorId = await creatAuthor(author, userId);
    await client.release();
    return authorId;
  } catch (e) {
    console.log(e);
  }

};

module.exports = {
  createUserAndAuthor,
  createUser
};
