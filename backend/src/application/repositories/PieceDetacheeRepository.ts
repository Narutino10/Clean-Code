import { PieceDetachee } from '../../domain/entities/PieceDetachee';

export interface PieceDetacheeRepository {
  findAll(): Promise<PieceDetachee[]>;
  findById(id: string): Promise<PieceDetachee | null>;
  savePiece(piece: PieceDetachee): Promise<PieceDetachee>;
  deletePiece(id: string): Promise<void>;
  updatePiece(id: string, piece: Partial<PieceDetachee>): Promise<void>;
}
