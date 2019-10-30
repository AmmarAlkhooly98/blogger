const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/register', function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	if (email === 'admin@test.com' && password === 'admin') {
		res.send({
			status: true
		});
	}
	if (email === '' || password === '') {
		console.log(email);
		message = 'please fill in the email and password fields';
	} else {
		message = 'invalid email or password';
	}
	res.status(401).send({
		status: false,
		message: message
	});
});

const port = process.env.PORT || 8081;
app.listen(process.env.PORT || port, console.log(`listening on port ${port}`));
