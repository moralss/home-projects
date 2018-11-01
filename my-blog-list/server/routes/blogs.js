const blogRoute = (app) =>  {
    app.post('/blog' , (req ,res) => {

        console.log(req.body);
    });
}


module.exports = {blogRoute}