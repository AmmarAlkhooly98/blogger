const { Blog } = require('../models');

module.exports = {
	async getPublicBlogs(req, res) {
		try {
			const blogs = await Blog.findAll({
				where: {
					type: 0
				}
			});
			res.send(blogs);
		} catch (err) {
			res.status(500).send({
				error: 'an error has ocurred trying to fetch the blogs'
			});
		}
	},
	async postBlog(req, res) {
		try {
			const blog = await Blog.create(req.body);
			console.log(blog);
			res.status(201).send(blog);
		} catch (error) {
			res.status(500).send({
				error: 'an error has ocurred trying to create the blog'
			});
		}
	},
	async showBlog(req, res) {
		try {
			const blog = await Blog.findOne({
				where: {
					id: req.params.blogId
				}
			});
			res.status(200).send(blog);
		} catch (error) {
			res.status(500).send({
				error: 'an error has ocurred trying to fetch the blog'
			});
		}
	},
	async editBlog(req, res) {
		try {
			console.log('yooooo', req.body, 'wazzup');
			await Blog.update(req.body, {
				where: {
					id: req.body.id
				}
			});
			console.log('hi');
			res.send(req.body);
		} catch (error) {
			res.status(500).send({
				error: 'an error has ocurred trying to update the blog'
			});
		}
	}
};
