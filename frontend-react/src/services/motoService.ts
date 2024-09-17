import axios from 'axios';
import { Entretien } from '../interfaces/Entretien';

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

export const updateKilometrage = async (id: string, kilometrage: number) => {
  const response = await api.put(`/motos/${id}/kilometrage`, { kilometrage });
  return response.data;
};

export const planifierEntretiens = async (motoId: string): Promise<void> => {
  await axios.post(`/api/motos/${motoId}/planifier-entretiens`);
};


export const getEntretiens = async (motoID: string): Promise<Entretien[]> => {
  const response = await api.get(`/api/motos/${motoID}/entretiens`);
  return response.data;
} 
