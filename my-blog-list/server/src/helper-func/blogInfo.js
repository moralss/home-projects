const { getBlogsForAuthor } = require("../queries/blogs");
const { getTotalLikes } = require("../queries/profile");



const returnBlogInfo = async (authorId) => {
    let blogInfo = {};
    let blogsFor = [];

    const blogsForAuthor = await getBlogsForAuthor(authorId);
    for (blog of blogsForAuthor) {
        blogInfo.id = blog.id;
        blogInfo.name = blog.name;
        blogInfo.user_id = blog.author_id;
        blogInfo.text = blog.text;
        blogInfo.updated_at = blog.updated_at;

        const id = blog.id;
        let total = await getTotalLikes(id)
        blogInfo.total = Number(total[0].sum);
        blogsFor.push(blogInfo);
        blogInfo = {}
    }

    return blogsFor

}


module.exports = {returnBlogInfo }