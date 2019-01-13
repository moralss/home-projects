const { getClient } = require("../db");

const deleteBlog = async blogId => {
  const client = await getClient();
  let statement = `DELETE FROM blogs WHERE  id = $1`;
  const res = await client.query(statement, [blogId]);
  try {
    return;
  } catch (e) {
    await client.release();
    await client.release();
    return;
  }
};

const deleteProfile = async blogId => {
  const client = await getClient();
  let statement = `DELETE FROM profiles WHERE  blog_id = $1`;
  const res = await client.query(statement, [blogId]);
  try {
    await client.release();
    return;
  } catch (e) {
    await client.release();
    return;
  }
};


const deleteComments = async blogId => {
  const client = await getClient();
  let statement = `DELETE FROM comments WHERE  blog_id = $1`;
  const res = await client.query(statement, [blogId]);
  try {
    await client.release();
    return;
  } catch (e) {
    await client.release();
    return;
  }
};

const editBlogPost = async blogId => {
  const client = await getClient();
  let statement = `select * from blogs WHERE  id = $1`;
  const res = await client.query(statement, [blogId]);
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
  deleteBlog,
  editBlogPost,
  deleteProfile,
  deleteComments
};

