import api from './api';
import { Moto } from '../interfaces/Moto';

export const getMotos = async (): Promise<Moto[]> => {
  const response = await api.get<Moto[]>('/motos');
  return response.data;
};

export const addMoto = async (moto: Moto): Promise<Moto> => {
    const response = await api.post<Moto>('/motos', moto);
    return response.data;
  };
  
// Ajoute d'autres fonctions pour créer, mettre à jour, supprimer des motos
