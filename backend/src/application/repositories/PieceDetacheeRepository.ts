import { Repository, DataSource, LessThanOrEqual } from 'typeorm';
import { PieceDetachee } from '../../domain/entities/PieceDetachee';

export class PieceDetacheeRepository extends Repository<PieceDetachee> {
    constructor(dataSource: DataSource) {
        super(PieceDetachee, dataSource.manager);
    }

    async findLowStockPieces(): Promise<PieceDetachee[]> {
        return this.find({
            where: {
                stock: LessThanOrEqual(10), // Utilisation correcte
            },
        });
    }
}
