import cron from 'node-cron';
// import { PieceDetacheeRepository } from '../../application/repositories/PieceDetacheeRepository';
import { TypeORMPieceDetacheeRepository } from '../../infrastructure/repositories/TypeORMPieceDetacheeRepository';
import { NotificationService } from '../../application/services/NotificationService';

export class StockScheduler {
  constructor(
    private pieceDetacheeRepository: TypeORMPieceDetacheeRepository,
    private notificationService: NotificationService
  ) {}

  public start(): void {
    cron.schedule('0 0 * * *', async () => {
      const pieces = await this.pieceDetacheeRepository.findAll();

      pieces.forEach(async (piece: any) => {
        if (piece.quantiteEnStock <= piece.seuilCritique) {
          await this.notificationService.envoyerAlerteStockBas(
            piece.id,
            `Le stock de ${piece.nom} est bas`
          );
        }
      });
    });
  }
}
