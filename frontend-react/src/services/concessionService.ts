import api from './api';

export const getAllConcessions = async () => {
  try {
    const response = await api.get('/api/concessions');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des concessions:', error);
    throw error;
  }
};
