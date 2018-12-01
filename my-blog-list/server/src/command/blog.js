const { getClient } = require("../db");

const createBlog = async (blogInfo, authorId) => {
  const { text } = blogInfo;
  const client = await getClient();
  let statement = `INSERT INTO blogs(text ,  author_id)  VALUES($1 , $2 )
    RETURNING id `;
  let parameters = [text, authorId];

  try {
    let blog = await client.query(statement, parameters);
    const blogId = blog.rows[0].id;
    return blogId;
  } catch (e) {
    console.log(e);
    await client.release();
    return;
  }

  await client.release();
};

const updateBlog = async (blogInfo) => {
  const { text, id } = blogInfo;
  const client = await getClient();
  let statement = `UPDATE blogs  SET text = $1 WHERE id = $2   RETURNING id  `;

  let parameters = [text, Number(id)];

  try {
    let blog = await client.query(statement, parameters);
    const blogId = blog.rows[0].id;
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
