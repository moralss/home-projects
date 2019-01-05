const { getBlogsForAuthor } = require("../queries/blogs");
const { getTotalLikes } = require("../queries/profile");
const { getTotalComments } = require("../queries/comments");





const returnBlogInfo = async (authorId) => {
    let blogInfo = {};
    let blogsFor = [];

    const blogsForAuthor = await getBlogsForAuthor(authorId);
    console.log("helper function ", blogsForAuthor);

    for (blog of blogsForAuthor) {
        blogInfo.id = blog.id;
        blogInfo.name = blog.name;
        blogInfo.user_id = blog.author_id;
        blogInfo.text = blog.text;
        blogInfo.updated_at = blog.updated_at;

        const id = blog.id;
        let total = await getTotalLikes(id);
        let totalComments = await getTotalComments(id);
        console.log("totalComments totalComments totalComments" , totalComments);
        let commentsTotal = Number(totalComments[0].count);

        if (commentsTotal === null) {
            blogInfo.totalComments = 0;
        }

        if (commentsTotal !== null) {
            blogInfo.totalComments = commentsTotal;

        }


        blogInfo.total = Number(total[0].sum);
        blogsFor.push(blogInfo);
        blogInfo = {}
    }

    return blogsFor

}


module.exports = { returnBlogInfo }