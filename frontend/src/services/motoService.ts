import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createMoto = async (data: {
  modele: string;
  kilometrage: number;
  dateDernierEntretien: Date;
}) => {
  const response = await api.post('/motos', data);
  return response.data;
};

export const getAllMotos = async () => {
  const response = await api.get('/motos');
  return response.data;
};
