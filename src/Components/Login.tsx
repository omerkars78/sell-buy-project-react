import React, { useState } from 'react';
import { login } from '../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      console.log(data);
      // Burada token'ı localStorage veya bir context'e kaydedebilirsiniz.
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
