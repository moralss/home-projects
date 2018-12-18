const { getClient } = require("../db");

const likeBlog = async (userId, blogId) => {
  const client = await getClient();
  let statement = `INSERT INTO profiles(author_id ,  blog_id , likes) VALUES($1 , $2 , $3)
      RETURNING id `;

  const res = await client.query(statement, [Number(userId), Number(blogId), 1]);
  try {
    await client.release();
    return res.rows;
  } catch (e) {
    await client.release();
    console.log(e);
    return;
  }
};


const dislikeBlog = async (authorId, blogId) => {
  const client = await getClient();
  let statement = `UPDATE profiles  SET likes = $1
     WHERE author_id = $2 AND WHERE blog_id = $3   RETURNING id  `;

  const res = await client.query(statement, [0, Number(authorId), Number(blogId)]);
  try {
    await client.release();
    return res.rows;
  } catch (e) {
    await client.release();
    console.log(e);
    return;
  }
};


module.exports = {
  likeBlog,
  dislikeBlog
};
