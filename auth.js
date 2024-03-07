import Cookies from 'js-cookie';

const TOKEN_KEY = 'accessToken';

export const login = (token) => {
	Cookies.set(TOKEN_KEY, token, { expires: 1 });
};

export const logout = () => {
	Cookies.remove(TOKEN_KEY);
};

export const getToken = () => {
	return Cookies.get(TOKEN_KEY);
};

export const isAuthenticated = () => {
	return getToken();
};
