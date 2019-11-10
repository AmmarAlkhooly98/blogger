module.exports = (sequelize, DataType) => {
	const Blog = sequelize.define('Blog', {
		id: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		blog: {
			type: DataType.STRING
		}
	});

	Blog.associate = (models) => {
		Blog.belongsTo(models.User);
	};

	return Blog;
};
