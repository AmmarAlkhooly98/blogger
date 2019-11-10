const path = require('path');
module.exports = {
	port: process.env.port || 8081,
	db: {
		database: process.env.DB_NAME || 'blog-app',
		user: process.env.USER || '',
		password: process.env.DB_PASS || '',
		params: {
			dialect: process.env.DIALECT || 'sqlite',
			storage: path.resolve(__dirname, '../../blog-app.sqlite'),
			define: {
				underscore: true
			},
			host: process.env.HOST || 'localhost',
			logging: process.env.LOG || false
		},
		operatorsAliases: false
	}
};
