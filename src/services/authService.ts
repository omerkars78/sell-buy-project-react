import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',  // Back-end sunucunuzun URL'si
});

export const signup = async (data: {
    name: string;
    surname: string;
    nickname:string;
    genderId: number;
    birthday: Date;
    email: string;
    password: string;
    userType?: number;
    
}) => {
    try {
        const response = await api.post('/auth/signup', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (credentials: { email: string, password: string }) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (email: string) => {
    try {
        const response = await api.post('/auth/reset-password', { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Diğer fonksiyonları da benzer şekilde ekleyin...
