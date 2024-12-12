import api from './api';

export const getAllEssais = async () => {
  const response = await api.get('/essais');
  return response.data;
};

export const createEssai = async (data: { conducteurId: string; motoId: string; dateEssai: string; duree: number }) => {
  const response = await api.post('/essais', data);
  return response.data;
};

export const getEssaiById = async (id: string) => {
  const response = await api.get(`/essais/${id}`);
  return response.data;
};

export const getEssaisByMoto = async (motoId: string) => {
  const response = await api.get(`/motos/${motoId}/essais`);
  return response.data;
};