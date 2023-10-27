// src/containers/LoginPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../services/authService';
import { loginSuccess, loginFailure } from '../store/authSlice';

const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = async () => {
        try {
            const data = await login(credentials);
            dispatch(loginSuccess(data));
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                dispatch(loginFailure(error.message));
            } else {
                dispatch(loginFailure('An unknown error occurred'));
            }
        }
    };

    return (
        <div>
            <input
                type="email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                placeholder="Email"
            />
            <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
