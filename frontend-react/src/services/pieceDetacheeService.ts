import api from './api';

export const getAllPieces = async () => {
  const response = await api.get('/api/pieces');
  return response.data;
};

export const getLowStockPieces = async () => {
  const response = await api.get('/api/pieces/low-stock');
  return response.data;
};

export const createPiece = async (data: {
  nom: string;
  prix: number;
  stock: number;
  seuilCritique: number;
}) => {
  const response = await api.post('/api/pieces', data);
  return response.data;
};
