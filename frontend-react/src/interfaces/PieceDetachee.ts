import { CommandePiece } from "./CommandePiece";

export interface PieceDetachee {
    id: string;
    nom: string;
    prix: number;
    commandes: CommandePiece[];
  }