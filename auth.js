import Cookies from 'js-cookie';

const TOKEN_KEY = 'token';

export const login = (token, navigate) => {
	Cookies.set(TOKEN_KEY, token, { expires: 1 });
	return navigate('/dashboard');
};

export const logout = () => {
	Cookies.remove(TOKEN_KEY);
	window.location.href = '/';
};

export const getToken = () => {
	return Cookies.get(TOKEN_KEY);
};

export const isAuthenticated = () => {
	return getToken();
};
