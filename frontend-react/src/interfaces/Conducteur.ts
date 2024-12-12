import { Essai } from './Essai';
import { Incident } from './Incident';

export interface Conducteur {
    id: string;
    nom: string;
    permis: string;
    experience: number;
    essais: Essai[];
    incidents: Incident[];
  }