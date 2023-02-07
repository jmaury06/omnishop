export const AUTH_KEY = 'authentication';

export const isBrowser = () => {
  return typeof window !== 'undefined';
};

export const getUser = () => {
  const userData = isBrowser() && window.localStorage.getItem(AUTH_KEY);
  return userData ? JSON.parse(userData) : {};
};

export const setUser = user => {
  window.localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

export const isLoggedIn = () => {
  const user = getUser();
  return !!user['token'];
};