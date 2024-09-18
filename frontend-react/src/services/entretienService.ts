import api from './api'; 
import { Entretien } from '../interfaces/Entretien';

// export const getEntretiens = async (motoId: string): Promise<Entretien[]> => {
//   const response = await api.get(`/motos/${motoId}/entretiens`);
//   return response.data;
// };

export const getEntretiens = async (motoId: string) => {
  const response = await api.get(`/motos/${motoId}/entretiens`);
  return response.data;
};
