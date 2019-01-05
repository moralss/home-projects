const { getClient } = require("../db");

const saveComment = async (commentInfo) => {
    let { id, blogIdInt, text } = commentInfo;
    console.log(" commentInfo", commentInfo);
    const client = await getClient();



    let statement = `INSERT INTO comments(author_id , blog_id , comment)
      VALUES($1 , $2  , $3) RETURNING id `;


    let parameters = [id, blogIdInt, text];


    try {
        let res = await client.query(statement, parameters);
        const commentId = res.rows[0].id;
        await client.release();
        return commentId;
    } catch (e) {
        console.log(e);
        await client.release();
        return;
    }

};



module.exports = {
    saveComment
};
