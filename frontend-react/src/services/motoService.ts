import api from './api'; 

export const getAllMotos = async () => {
  const response = await api.get('/api/motos');
  return response.data;
};

export const createMoto = async (data: { modele: string; kilometrage: number; dateDernierEntretien: Date }) => {
  const response = await api.post('/api/motos', data);
  return response.data;
};

export const planifierEntretiens = async (motoId: string) => {
  const response = await api.post(`/api/motos/${motoId}/planifier`);
  return response.data;
};


export const updateKilometrage = async (motoId: string, kilometrage: number) => {
  const response = await api.put(`/api/motos/${motoId}/kilometrage`, { kilometrage });
  return response.data;
};

export const getMotoById = async (id: string) => {
  const response = await api.get(`/api/motos/${id}`);
  return response.data;
};

export const updateMoto = async (id: string, moto: any) => {
  const response = await api.put(`/api/motos/${id}`, moto);
  return response.data;
};

export const getAllModeles = async () => {
  const response = await api.get('/api/modeles');
  return response.data;
}