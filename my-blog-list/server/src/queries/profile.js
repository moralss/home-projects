const { getClient } = require("../db");

const getTotalLikes = async (blogId) => {
    const client = await getClient();
    let statement = `
    select sum(likes) from profiles where blog_id = $1;  
  `;

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

const checkLiked = async (authorId) => {
    const client = await getClient();
    let statement = `select * from profiles where  author_id = $1; `;
    const res = await client.query(statement, [Number(authorId)]);
    try {
        await client.release();
        return res.rows;
    } catch (e) {
        await client.release();
        console.log(e);
        return;
    }
};

const checkIfLiked = async (blogId, authorId) => {
    const client = await getClient();
    let statement = `
    select * from profiles where  author_id = $1 and blog_id = $2;  
  `;

    console.log("check if liked", [Number(authorId), blogId]);
    const res = await client.query(statement, [blogId, Number(authorId)]);

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
    getTotalLikes,
    checkLiked,
    checkIfLiked
};
