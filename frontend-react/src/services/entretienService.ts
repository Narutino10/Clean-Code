import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getEntretiens = async () => {
  const response = await api.get('/entretiens');
  return response.data;
};

