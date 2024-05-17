// import Cookies from 'js-cookie';
import axios from 'axios';
const baseURL = 'http://localhost:3000';

export const login = async (credentials, navigate) => {
	try {
		const response = await axios.post(`${baseURL}/signin`, credentials, {
			withCredentials: true,
		});
		if (response.status === 200) {
			navigate('/dashboard');
		} else {
			console.error('Login failed:', response.data.message);
		}
	} catch (error) {
		console.error('Login error:', error);
	}
};

export const logout = async () => {
	try {
		await axios.post(`${baseURL}/signout`, {}, { withCredentials: true });
		window.location.href = '/';
	} catch (error) {
		console.error('Logout error:', error);
	}
};

export const isAuthenticated = async () => {
	try {
		const response = await axios.get(`${baseURL}/protected`, {
			withCredentials: true,
		});
		return response.status === 200;
	} catch (error) {
		console.error('Auth check error:', error);
		return false;
	}
};

// const TOKEN_KEY = 'accessToken';

// export const login = (token, navigate) => {
// 	Cookies.set(TOKEN_KEY, token, { expires: 1 });
// 	return navigate('/dashboard');
// };

// export const logout = () => {
// 	Cookies.remove(TOKEN_KEY);
// 	window.location.href = '/';
// };

// export const getToken = () => {
// 	return Cookies.get(TOKEN_KEY);
// };

// export const isAuthenticated = () => {
// 	return getToken();
// };
