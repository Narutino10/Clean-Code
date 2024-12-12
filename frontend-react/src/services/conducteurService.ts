import api from './api';

export const getAllConducteurs = async () => {
  const response = await api.get('/conducteurs');
  return response.data;
};

export const createConducteur = async (data: { nom: string; permis: string; experience: number }) => {
  const response = await api.post('/conducteurs', data);
  return response.data;
};

export const getConducteurById = async (id: string) => {
  const response = await api.get(`/conducteurs/${id}`);
  return response.data;
};

export const updateConducteur = async (id: string, conducteur: any) => {
  const response = await api.put(`/conducteurs/${id}`, conducteur);
  return response.data;
};

export const deleteConducteur = async (id: string) => {
  await api.delete(`/conducteurs/${id}`);
};
