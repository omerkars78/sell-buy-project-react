import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Bu URL backend sunucunuzun adresi olmalıdır.
});

export default api;
