const { User, Blog } = require('../models');

module.exports = {
	async getUser(req, res) {
		try {
			userId = req.params.userId;
			console.log(userId);
			const user = await User.findAll({
				where: {
					id: userId
				}
			});
			const blogs = await Blog.findAll({
				where: {
					UserId: userId
				}
			});
			res.status(200).send({ user: user, blogs: blogs });
		} catch (err) {
			res.status(500).send({
				error: 'an error has ocurred trying to fetch this user'
			});
		}
	}
};
