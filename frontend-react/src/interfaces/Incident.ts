import { Conducteur } from './Conducteur';
import { Moto } from './Moto';

export interface Incident {
    id: string;
    conducteur: Conducteur;
    moto: Moto;
    date: string; // ISO string format
    description: string;
  }