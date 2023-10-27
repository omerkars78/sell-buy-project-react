import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',  // Back-end sunucunuzun URL'si
});

export const signup = async (data: {
    name: string;
    surname: string;
    genderId: number;
    birthday: Date;
    email: string;
    password: string;
    profileImage?: string;
    userType?: string;
    country?: string;
    city: string;
    district?: string;
    school: string;
    detailedAddress: string;
}) => {
    try {
        const response = await api.post('/signup', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (credentials: { email: string, password: string }) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPassword = async (email: string) => {
    try {
        const response = await api.post('/reset-password', { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Diğer fonksiyonları da benzer şekilde ekleyin...
