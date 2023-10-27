// src/services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export const signup = async (userData: any) => {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
};

export const login = async (credentials: any) => {
    const response = await axios.post(`${API_URL}login`, credentials);
    return response.data;
};

export const logout = async () => {
    const response = await axios.post(`${API_URL}logout`);
    return response.data;
};

export const getProfile = async () => {
    const response = await axios.get(`${API_URL}profile`);
    return response.data;
};

export const updateProfile = async (updatedData: any) => {
    const response = await axios.put(`${API_URL}update-profile`, updatedData);
    return response.data;
};
