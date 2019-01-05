const { getAuthorBlogs } = require("../queries/blogs");
const { getTotalLikes } = require("../queries/profile");
const { getTotalComments } = require("../queries/comments");


const returnUserBlogInfo = async (authorId) => {
    let userBlog = {};
    let arrayOfUserBlogs = [];

    const userBlogs = await getAuthorBlogs(authorId);
    console.log("userBlogs" , userBlogs);

    // {"id":1,"text":"my name is sbu this is my blog","author_id":1}
    for (blog of userBlogs) {

        const blogIdInt = Number(blog.id);
        userBlog.id = blog.id;
        userBlog.text = blog.text;
        userBlog.author_id = blog.author_id;
        userBlog.updated_at = blog.updated_at;
    
        let totalLikes = await getTotalLikes(blogIdInt);
        let totalComments = await getTotalComments(blogIdInt);
        let commentsTotal = Number(totalComments[0].count);

        if (commentsTotal === null) {
            userBlog.totalComments = 0;
        }

        if (commentsTotal !== null) {
            userBlog.totalComments = commentsTotal;

        }

        userBlog.totalLikes = Number(totalLikes[0].sum);
        arrayOfUserBlogs.push(userBlog);
        userBlog = {}
    }

    return arrayOfUserBlogs

}


module.exports = { returnUserBlogInfo }