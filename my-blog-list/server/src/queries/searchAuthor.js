
const { getClient } = require("../db");


const getSearchResults = async (name) => {
    const client = await getClient();
    let statement = `
    select  blogs.author_id , blogs.id , authors.name , blogs.text , blogs.updated_at  from
    authors left join blogs on blogs.author_id = authors.id
    WHERE authors.name LIKE $1 ORDER BY blogs.updated_at  DESC;
  ;  
  `;


  

    const res = await client.query(statement, [`%${name}%`]);
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
    getSearchResults,
};


