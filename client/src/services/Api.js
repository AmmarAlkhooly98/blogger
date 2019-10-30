import axios from 'axios';

//to connect axios to be used throughout our clint side
export default () => {
	return axios.create({
		baseURL: `http://localhost:8081/`
	});
};
