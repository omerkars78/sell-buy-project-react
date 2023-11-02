import React, { useState } from 'react';
import { signup } from '../services/authService';

interface SignupData {
    name: string;
    surname: string;
    nickname:string,
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

const Register = () => {
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
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /><br />
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" required /><br />
            <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Nickname" required /><br />
            <input type="number" value={genderId} onChange={(e) => setGenderId(e.target.value)} placeholder="Gender ID" required /><br />
            <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday" required /><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /><br />
            <input type="text" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} placeholder="Profile Image URL" /><br />
            <input type="text" value={userType} onChange={(e) => setUserType(e.target.value)} placeholder="User Type" /><br />
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" /><br />
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required /><br />
            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="District" /><br />
            <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School" required /><br />
            <input type="text" value={detailedAddress} onChange={(e) => setDetailedAddress(e.target.value)} placeholder="Detailed Address" required /><br />
            <button type="submit">Register</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default Register;
