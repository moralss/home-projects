const { getClient } = require("../db");


const getAllComments = async (blogId) => {
    const client = await getClient();

    let statement = `select authors.name ,comments.comment ,
    comments.created_at from comments inner join authors on 
    authors.id = comments.author_id inner join blogs on blogs.id =
     comments.blog_id 
    where comments.blog_id = $1; `;

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



const getTotalComments = async (blogId) => {
    const client = await getClient();
    let statement = `
    SELECT COUNT(blog_id) FROM comments where blog_id = $1;  
  `;

    const res = await client.query(statement, [Number(blogId)]);

    try {
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        console.log(e);
        return;
    }
};



module.exports = { getAllComments, getTotalComments };
