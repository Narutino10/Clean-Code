import { Moto } from './Moto';
import { Conducteur } from './Conducteur';

export interface Essai {
    id: string;
    moto: Moto;
    conducteur: Conducteur;
    dateEssai: string; // ISO string format
    duree: number; // duration in minutes
  }