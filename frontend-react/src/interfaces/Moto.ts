import { ModeleMoto } from './ModeleMoto';
import { Entretien } from './Entretien';
import { Essai } from './Essai';
import { Incident } from './Incident';
import { Panne } from './Panne';
export interface Moto {
  id: string;
  modele: ModeleMoto;
  kilometrage: number;
  dateDernierEntretien: string; // ISO string format
  entretiens: Entretien[];
  essais: Essai[];
  incidents: Incident[];
  pannes: Panne[];
  intervalleEntretienKm?: number;
  intervalleEntretienTemps?: number;
}