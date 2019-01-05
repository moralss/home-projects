const { getClient } = require("../db");

const likeBlog = async (authorId, blogId) => {
  const client = await getClient();
  let statement = `INSERT INTO profiles(author_id ,  blog_id , likes) VALUES($1 , $2 , $3)
      RETURNING id `;

  console.log("input" , [1, Number(authorId), Number(blogId)]);
  const res = await client.query(statement, [Number(authorId), Number(blogId), 1]);
  try {
    await client.release();
    return res.rows;
  } catch (e) {
    await client.release();
    console.log(e);
    return;
  }
};


const updateAuthorLike = async (like, authorId, blogId) => {
  const client = await getClient();
  let statement = `UPDATE profiles  SET likes = $1 
  where author_id = $2 and blog_id = $3  `;

  const res = await client.query(statement, [like, Number(authorId), Number(blogId)]);
  
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
  updateAuthorLike
};
