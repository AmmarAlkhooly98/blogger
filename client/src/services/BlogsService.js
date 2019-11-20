import Api from './Api';

//this will handel our authentication based on their credentials
export default {
	getPublicBlogs() {
		return Api().get('publicBlogs');
	},
	createBlog(blog) {
		return Api().post('/blogs/create', blog);
	},
	editBlog(blog) {
		return Api().put(`/blogs/${blog.Id}`, blog);
	},
	showBlog(blogId) {
		return Api().get(`/blogs/${blogId}`);
	}
};
