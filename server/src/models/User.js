const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

// function hashPassword(user, options) {
// 	const SALT_FACTOR = 8;

// 	if (!user.changed('password')) {
// 		return;
// 	}

// 	return bcrypt.genSaltAsync(SALT_FACTOR).then((salt) => bcrypt.hashAsync(user.password, salt, null)).then((hash) => {
// 		user.setDataValue('password', hash);
// 	});
// }

module.exports = (sequelize, DataType) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataType.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			email: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				},
				unique: true
			},
			password: {
				type: DataType.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			}
		}
		// {
		// 	hooks: {
		// 		beforeCreate: hashPassword,
		// 		beforeUpdate: hashPassword,
		// 		beforeSave: hashPassword
		// 	}
		// }
	);

	// User.prototype.comparePassword = function(password) {
	// 	console.log(this.password);
	// 	return bcrypt.compareAsync(password, this.password);
	// };

	User.associate = (models) => {
		User.hasMany(models.Blog);
	};
	return User;
};
