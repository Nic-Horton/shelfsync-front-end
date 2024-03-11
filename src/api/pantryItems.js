import axios from 'axios';

const baseURL = 'http://localhost:3000';

axios.defaults.withCredentials = true;

export const getInventory = async () => {
	return await axios
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

export const createItem = async ({ name, quantity, unit, category }) => {
	return axios
		.post(`${baseURL}/pantryItems`, {
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

export const deleteItem = async ({ id }) => {
	return axios
		.delete(`${baseURL}/pantryItems/${id}`)
		.then((response) => {
			console.log(response);
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		});
};
