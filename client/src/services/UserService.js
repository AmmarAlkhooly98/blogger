import Api from './Api';

//this will handel our authentication based on their credentials
export default {
	getUser(userId) {
		return Api().get(`/profile/${userId}`);
	}
};
