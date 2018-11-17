const { getClient } = require("../db");

const createBlog = async (blogInfo, authorId) => {
  const { text } = blogInfo;
  console.log("author id", authorId);
  const client = await getClient();
  let statement = `INSERT INTO blogs(text ,  author_id)  VALUES($1 , $2 )
    RETURNING id `;

  let parameters = [text, authorId];

  try {
    let blog = await client.query(statement, parameters);
    const blogId = blog.rows[0].id;
    await client.release();
    return blogId;
  } catch (e) {
    console.log(e);
    await client.release();
    return;
  }
};

const updateBlog = async (blogInfo) => {
  const { text , id } = blogInfo;
  console.log("blog" , blogInfo);
  const client = await getClient();
  let statement = `UPDATE blogs
  SET text = $1
  WHERE id = $2;`;

  let parameters = [text, Number(id)];

  try {
    let blog = await client.query(statement, parameters);
    const blogId = blog.rows;
    return blogId;
  } catch (e) {
    console.log(e);

    return;
  }
  await client.release();
};





module.exports = {
  createBlog,
  updateBlog
};
