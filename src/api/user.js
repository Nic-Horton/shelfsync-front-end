import axios from 'axios';

const baseURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;

export const createProfile = async ({ username, password }, navigate) => {
	axios
		.post(`${baseURL}/signup`, { username, password })
		.then(function (response) {
			console.log(response);
			alert('Profile created! Next step is logging in');
			navigate('/signin');
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const updatePassword = async ({ password }) => {
	return axios
		.put(`${baseURL}/user`, {
			password,
		})
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
