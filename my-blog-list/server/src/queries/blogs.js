
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


const getAuthorBlog = async blogId => {
  const client = await getClient();
  let statement = `SELECT * FROM blogs WHERE  id = $1`;
  const res = await client.query(statement, [blogId]);
  try {
    await client.release();
    return res.rows;
  } catch (e) {
    await client.release();
    return;
  }
};




const showAllBlogs = async () => {
  const client = await getClient();
  let statement = `
  select  blogs.author_id , blogs.id , authors.name , blogs.text , blogs.updated_at  from
  authors inner join blogs on blogs.author_id = authors.id
  ORDER BY blogs.updated_at  DESC
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

const getBlogsForAuthor = async (authorId) => {
  const client = await getClient();


  let statement = `
  select  blogs.author_id , blogs.id , authors.name , blogs.text ,
   blogs.updated_at  from authors inner 
   join blogs on blogs.author_id = authors.id  where authors.id = $1;
  ; `


  const parameters = [authorId]
  const res = await client.query(statement , parameters);
  try {
    await client.release();
    return res.rows;
    await client.release();
  } catch (e) {
    console.log(e);
    return;
  }
};


module.exports = {
  getAuthorBlogs,
  showAllBlogs,
  getBlogsForAuthor,
  getAuthorBlog
};



