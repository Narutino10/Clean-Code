import { PieceDetachee } from "./PieceDetachee";

export interface CommandePiece {
    id: string;
    piece: PieceDetachee;
    dateCommande: string; // ISO string format
    quantite: number;
    coutTotal: number;
    dateLivraisonEstimee: string; // ISO string format
  }