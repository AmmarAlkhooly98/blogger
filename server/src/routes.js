const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const BlogsController = require('./controllers/BlogsController');
const UserController = require('./controllers/UsersController');
module.exports = (app) => {
	app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register);
	app.post('/login', AuthenticationController.login);
	app.get('/publicBlogs', BlogsController.getPublicBlogs);
	app.post('/blogs/create', BlogsController.postBlog);
	app.get('/blogs/:blogId', BlogsController.showBlog);
	app.put('/blogs/:blogId', BlogsController.editBlog);
	app.get('/profile/:userId', UserController.getUser);
};
