import axios from 'axios';

const baseURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;

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
