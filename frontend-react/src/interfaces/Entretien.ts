import { Moto } from './Moto';

export interface Entretien {
  id: string;
  moto: Moto;
  description: string;
  coutTotal: number;
  piecesChangees: string[];
  date: string; // ISO string format
  recommandations?: string;
}