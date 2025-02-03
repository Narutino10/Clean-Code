import api from './api'; 
import { Entretien } from '../interfaces/Entretien';
import { validate as isUuid } from 'uuid';

export const getEntretiens = async (motoId: string): Promise<Entretien[]> => {
  if (!motoId || !isUuid(motoId)) { 
    console.error("ID de moto invalide :", motoId);
    return [];
  }

  const response = await api.get(`/motos/${motoId}/entretiens`);
  return response.data;
};

export const getAllEntretiens = async (): Promise<Entretien[]> => {
  const response = await api.get('/entretiens'); // API backend pour récupérer tous les entretiens
  return response.data;
};