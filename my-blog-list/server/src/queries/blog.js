const { getClient } = require("../db");

const getAuthorBlogs = async authorId => {
  const client = await getClient();
  let statement = `SELECT * FROM blogs WHERE  author_id = $1`;
  const res = await client.query(statement, [authorId]);
  try {
    await client.release();
    const latestBlog = res.rows;
    return latestBlog;
  } catch (e) {
    await client.release();
    return;
  }
};

const deleteBlog = async blogId => {
  const client = await getClient();
  let statement = `DELETE FROM blogs WHERE  id = $1`;
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

const showAllBlogs = async () => {
  const client = await getClient();
  let statement = `
  select  authors.id , authors.name , blogs.text , blogs.updated_at  from
  authors inner join blogs on blogs.author_id = authors.id
  ORDER BY blogs.updated_at  
  ;  
  `;
  
  const res = await client.query(statement);
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
  getAuthorBlogs,
  deleteBlog,
  editBlogPost,
  showAllBlogs
};
