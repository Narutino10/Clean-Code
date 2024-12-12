import api from './api';

export const getAllIncidents = async () => {
  const response = await api.get('/incidents');
  return response.data;
};

export const reportIncident = async (data: { conducteurId: string; motoId: string; description: string; date: Date }) => {
  const response = await api.post('/incidents', data);
  return response.data;
};

export const getIncidentById = async (id: string) => {
  const response = await api.get(`/incidents/${id}`);
  return response.data;
};

export const getIncidentsByMoto = async (motoId: string) => {
  const response = await api.get(`/motos/${motoId}/incidents`);
  return response.data;
};

export const addIncident = async (motoId: string, incidentData: any) => {
  const response = await api.post(`/motos/${motoId}/incidents`, incidentData);
  return response.data;
};