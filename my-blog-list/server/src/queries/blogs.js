const { getClient } = require("../db");




const getAuthorBlogs = async authorId => {

  `
  SELECT SUM(CASE WHEN blog_id = 2 THEN 1 ELSE 0 END) as
  blog_id  from profiles;

  SELECT author_id , COUNT(blog_id) FROM profiles ;
;
`

`
SELECT author_id FROM profiles, 
(select count(*) as count FROM profiles) as x ORDER BY main_cat_name
`
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


const showAllBlogs = async () => {
  const client = await getClient();
  let statement = `
  select  blogs.author_id , blogs.id , authors.name , blogs.text , blogs.updated_at  from
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



`
select *  from authors inner join blogs on blogs.author_id = authors.id
 
`

const getBlogsForAuthor = async () => {
  const client = await getClient();

  let statement = `
  select  blogs.author_id , blogs.id , authors.name , blogs.text , blogs.updated_at  from
  authors inner join blogs on blogs.author_id = authors.id
  ORDER BY blogs.updated_at 
  
  ; `

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
  showAllBlogs,
  getBlogsForAuthor
};



