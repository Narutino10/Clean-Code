import api from './api'; 
import { Entretien } from '../interfaces/Entretien'; // Assurez-vous que le chemin est correct

export const getEntretiens = async (motoId: string): Promise<Entretien[]> => {
  const response = await api.get(`/motos/${motoId}/entretiens`);
  return response.data;
};
