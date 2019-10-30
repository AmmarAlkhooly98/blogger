import Api from './Api';

//this will handel our authentication based on their credentials
export default {
	register(credentials) {
		return Api().post('register', credentials);
	}
};

/* Example from another register file

AuthenticationService.register({
	email: 'ammaralkhooly1@gmail.com',
	password: '123456'
});

*/
