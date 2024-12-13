import { Repository, DeleteResult, LessThanOrEqual } from 'typeorm';
import { PieceDetachee } from '../../domain/entities/PieceDetachee';
import { PieceDetacheeRepository } from '../../application/repositories/PieceDetacheeRepository';
import { AppDataSource } from '../../data-source';

export class TypeORMPieceDetacheeRepository
  extends Repository<PieceDetachee>
  implements PieceDetacheeRepository
{
  constructor() {
    super(PieceDetachee, AppDataSource.manager);
  }

  async findAll(): Promise<PieceDetachee[]> {
    return this.find();
  }

  async findById(id: string): Promise<PieceDetachee | null> {
    return this.findOne({ where: { id } });
  }

  async savePiece(piece: PieceDetachee): Promise<PieceDetachee> {
    return super.save(piece);
  }

  async deletePiece(id: string): Promise<void> {
    const result: DeleteResult = await super.delete(id);
    if (result.affected === 0) {
      throw new Error(`Aucune pièce détachée trouvée avec l'ID ${id}`);
    }
    return Promise.resolve();
  }

  async updatePiece(id: string, piece: Partial<PieceDetachee>): Promise<void> {
    const result = await super.update(id, piece);
    if (result.affected === 0) {
      throw new Error(`Aucune mise à jour effectuée pour l'ID ${id}`);
    }
    return Promise.resolve();
  }

  // Ajout de la méthode pour trouver les pièces en stock critique
  async findLowStockPieces(): Promise<PieceDetachee[]> {
    return this.find({
      where: {
        stock: LessThanOrEqual(10), // Vérification des pièces avec stock ≤ 10
      },
    });
  }
}
