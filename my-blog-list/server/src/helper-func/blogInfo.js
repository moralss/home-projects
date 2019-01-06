const { getBlogsForAuthor } = require("../queries/blogs");
const { getTotalLikes } = require("../queries/profile");
const { getTotalComments } = require("../queries/comments");


const returnBlogInfo = async (authorId) => {
    let blogInfo = {};
    let blogsFor = [];

    const blogsForAuthor = await getBlogsForAuthor(authorId);

    for (blog of blogsForAuthor) {
        const blogIdInt = Number(blog.id);
        blogInfo.id = blog.id;
        blogInfo.name = blog.name;
        blogInfo.user_id = blog.author_id;
        blogInfo.text = blog.text;
        blogInfo.updated_at = blog.updated_at;
        let totalLikes = await getTotalLikes(blogIdInt);
        let totalComments = await getTotalComments(blogIdInt);
        let commentsTotal = Number(totalComments[0].count);

        if (commentsTotal === null) {
            blogInfo.totalComments = 0;
        }

        if (commentsTotal !== null) {
            blogInfo.totalComments = commentsTotal;

        }

        blogInfo.totalLikes = Number(totalLikes[0].sum);
        blogsFor.push(blogInfo);
        blogInfo = {}
    }

    return blogsFor

}


module.exports = { returnBlogInfo }