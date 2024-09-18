import api from './api'; // Remplacer axios par api pour gérer les appels

export const getAllMotos = async () => {
  const response = await api.get('/motos');
  return response.data;
};

export const createMoto = async (data: { modele: string; kilometrage: number; dateDernierEntretien: Date }) => {
  const response = await api.post('/motos', data);
  return response.data;
};

export const planifierEntretiens = async (motoId: string) => {
  const response = await api.post(`/motos/${motoId}/planifier`);
  return response.data;
};


export const updateKilometrage = async (motoId: string, kilometrage: number) => {
  const response = await api.put(`/motos/${motoId}/kilometrage`, { kilometrage });
  return response.data;
};

export const getMotoById = async (id: string) => {
  const response = await api.get(`/motos/${id}`);
  return response.data;
};

export const updateMoto = async (id: string, moto: any) => {
  const response = await api.put(`/motos/${id}`, moto);
  return response.data;
};