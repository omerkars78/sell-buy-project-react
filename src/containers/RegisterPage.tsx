// src/containers/RegisterPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../services/authService';
import { loginSuccess, loginFailure } from '../store/authSlice';  // Assuming signup success/failure uses the same actions as login

const RegisterPage: React.FC = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ email: '', password: '', name: '' });

    const handleSignup = async () => {
        try {
            const data = await signup(userData);
            dispatch(loginSuccess(data));  // Assuming signup success sets user data similarly to login
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
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                placeholder="Name"
            />
            <input
                type="email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                placeholder="Email"
            />
            <input
                type="password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                placeholder="Password"
            />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default RegisterPage;
