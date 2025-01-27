import api from './api';

export const getAllClients = async () => {
  try {
    const response = await api.get('/api/clients');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des clients:', error);
    throw error;
  }
};
