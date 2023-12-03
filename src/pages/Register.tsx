// components/Register.tsx
import React, { useState, useRef } from 'react';
import { signup } from '../services/authService';
import { Button, TextField, Typography, Container, Grid, IconButton, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
interface SignupData {
    name: string;
    surname: string;
    nickname: string;
    genderId: number;
    birthday: Date;
    email: string;
    password: string;
    userType?: number;

}

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [nickname, setNickname] = useState('');
    const [genderId, setGenderId] = useState<number | undefined>();   
     const [birthday, setBirthday] = useState<string | ''>('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [userType, setUserType] = useState<number | undefined>();   
    const [error, setError] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    const isConfirmPasswordValid = password === confirmPassword;




    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setProfileImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        // Check if the passwords are valid and match
        if (!passwordRegex.test(password)) {
            setError('Password does not meet the required criteria.');
            return;
        }
    
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
    
        // Clear any existing error messages
        setError(null);
    
        try {
            const data = await signup({
                name,
                surname,
                nickname,
                genderId: Number(genderId),
                birthday: new Date(birthday),
                email,
                password,
                userType,
            } as SignupData);
            console.log('Registration success:', data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An error occurred during registration.');
            }
        }
    };
    

    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        {/* Circular Container for Profile Image */}
                        <div style={{
                            margin: 'auto',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#f0f0f0'
                        }}>
                            {profileImage && <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                            <input
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="profile-image-file"
                                type="file"
                                onChange={handleProfileImageChange}
                                ref={fileInputRef}
                            />
                            <label htmlFor="profile-image-file">
                                <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleIconClick} style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    transform: 'translate(50%, 50%)',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                                    padding: '10px',
                                    zIndex: 2, // Ensure it's on top
                                    color: 'black' // Ensure the icon is visible
                                }}>
                                    <EditIcon />
                                </IconButton>
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>

                        {/* Sol sütundaki inputlar */}
                        <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} required margin="normal" />


                        <TextField fullWidth label="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} required margin="normal" />

                        <FormControl fullWidth margin="normal" required>
                            <InputLabel id="gender-label">Gender</InputLabel>
                            <Select
                                labelId="gender-label"
                                id="gender"
                                value={genderId}
                                label="Gender"
                                onChange={(e) => setGenderId(Number(e.target.value))}
                                required
                            >
                                <MenuItem value={1}>Male</MenuItem>
                                <MenuItem value={2}>Female</MenuItem>
                                <MenuItem value={3}>Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required margin="normal" />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        {/* Right column inputs */}
                        <TextField fullWidth label="Surname" value={surname} onChange={(e) => setSurname(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required margin="normal" />
                        <TextField fullWidth type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required margin="normal" />
                        <TextField fullWidth label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required margin="normal" />
                    </Grid>

           

                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="userType-label">User Type</InputLabel>
                        <Select
                            labelId="userType-label"
                            id="userType"
                            value={userType}
                            label="User Type"
                            onChange={(e) => setUserType(Number(e.target.value))}
                        >
                            <MenuItem value={1}>Student</MenuItem>
                            <MenuItem value={2}>Company</MenuItem>
                        </Select>

                    </FormControl>
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={3}></Grid>

                    <Grid item xs={12} md={6}>
                        <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px', marginBottom: '20px' }}>
                            Register
                        </Button>
                        {error && <div style={{ color: 'red', marginTop: '20px', marginBottom: '20px' }}>{error}</div>}
                    </Grid>

                    <Grid item xs={12} md={3}></Grid>
                </Grid>

            </form>
        </Container>
    );
};

export default Register;
