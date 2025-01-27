import api from './api';

export const getAllPieces = async () => {
  try {
    const response = await api.get('/api/pieces');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des pièces détachées:', error);
    throw error;
  }
};
