import axios from 'axios';

const baseURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;

export const getInventory = () => {
	return axios
		.get(`${baseURL}/pantryItems`)
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};

export const updateItem = async ({ id, name, quantity, unit, category }) => {
	return axios
		.put(`${baseURL}/pantryItems/${id}`, {
			name,
			quantity,
			unit,
			category,
		})
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
