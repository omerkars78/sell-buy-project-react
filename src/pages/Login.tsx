// components/Login.tsx
import React, { useState } from 'react';
import { login } from '../services/authService';
import { Button, TextField, Box, Typography, Container } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await login({ email, password });
            console.log('Login success:', data);
            // Burada başarılı giriş sonrası işlemler yapılabilir
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An error occurred.');
            }
        }
    };

    return (
        <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
                style={{ width: '100%', maxWidth: 400, margin: 'auto' }}
            >
                <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                    Login
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 16 }}
                >
                    Login
                </Button>
                {error && (
                    <Typography color="error" style={{ marginTop: 16, textAlign: 'center' }}>
                        {error}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default Login;
