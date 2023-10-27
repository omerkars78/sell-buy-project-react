import api from './api';

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

export const signup = async (userData: any) => {
  const response = await api.post('/signup', userData);
  return response.data;
};
