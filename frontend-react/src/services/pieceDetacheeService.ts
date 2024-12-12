import api from './api';

export const getAllPieces = async () => {
  const response = await api.get('/pieces');
  return response.data;
};

export const createPiece = async (data: { nom: string; prix: number }) => {
  const response = await api.post('/pieces', data);
  return response.data;
};

export const getPieceById = async (id: string) => {
  const response = await api.get(`/pieces/${id}`);
  return response.data;
};

export const createCommandePiece = async (data: { pieceId: string; quantite: number; dateCommande: string }) => {
  const response = await api.post('/commandes', data);
  return response.data;
};
