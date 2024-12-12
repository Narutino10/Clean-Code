import { Moto } from './Moto';

export interface Panne {
    id: string;
    moto: Moto;
    description: string;
    date: string; // ISO string format
    estSousGarantie?: boolean;
    actionCorrective?: string;
  }