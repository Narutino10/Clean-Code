import { Moto } from "./Moto";

export interface ModeleMoto {
    id: string;
    nom: string;
    entretienIntervalKm: number;
    entretienIntervalTemps: number;
    motos: Moto[];
  }