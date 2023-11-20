// components/Register.tsx
import React, { useState } from 'react';
import { signup } from '../services/authService';
import { Button, TextField, Box, Container, Grid } from '@mui/material';

interface SignupData {
    name: string;
    surname: string;
    nickname: string;
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
}

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [nickname, setNickname] = useState('');
    const [genderId, setGenderId] = useState<string | ''>('');
    const [birthday, setBirthday] = useState<string | ''>('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [userType, setUserType] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [school, setSchool] = useState('');
    const [detailedAddress, setDetailedAddress] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await signup({
                name,
                surname,
                nickname,
                genderId: Number(genderId),
                birthday: new Date(birthday),
                email,
                password,
                profileImage,
                userType,
                country,
                city,
                district,
                school,
                detailedAddress,
            } as SignupData);
            console.log('Registration success:', data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An error occurred.');
            }
        }
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '20px' }}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {/* Sol sütundaki inputlar */}
                        <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Gender ID" type="number" value={genderId} onChange={(e) => setGenderId(e.target.value)} required margin="normal" />
                        <TextField fullWidth type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required margin="normal" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Sağ sütundaki inputlar */}
                        <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Profile Image URL" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} margin="normal" />
                        <TextField fullWidth label="User Type" value={userType} onChange={(e) => setUserType(e.target.value)} margin="normal" />
                        <TextField fullWidth label="Country" value={country} onChange={(e) => setCountry(e.target.value)} margin="normal" />
                    </Grid>
                    <Grid item xs={12}>
                        {/* Alt kısım */}
                        <TextField fullWidth label="City" value={city} onChange={(e) => setCity(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="District" value={district} onChange={(e) => setDistrict(e.target.value)} margin="normal" />
                        <TextField fullWidth label="School" value={school} onChange={(e) => setSchool(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Detailed Address" value={detailedAddress} onChange={(e) => setDetailedAddress(e.target.value)} required margin="normal" />
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                            Register
                        </Button>
                        {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default Register;
