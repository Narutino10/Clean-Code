import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Remplace par l'URL de ton backend
});

export default api;
