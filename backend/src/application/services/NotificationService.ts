import { NotificationRepository } from '../../application/repositories/NotificationRepository';
import { Notification } from '../../domain/entities/Notification';

export class NotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  public async envoyerRappel(motoId: string, message: string): Promise<void> {
    console.log(`Rappel envoyé pour la moto ${motoId}: ${message}`);
    const notification = new Notification(motoId, message);
    await this.notificationRepository.saveNotification(notification);
  }

  public async envoyerRappelEntretien(pieceId: string, message: string): Promise<void> {
    console.log(`Rappel d'entretien envoyé pour la pièce ${pieceId}: ${message}`);
    const notification = new Notification(pieceId, message);
    await this.notificationRepository.saveNotification(notification);
  }

  public async envoyerAlerteStockBas(pieceId: string, message: string): Promise<void> {
    console.log(`Alerte de stock bas envoyée pour la pièce ${pieceId}: ${message}`);
    const notification = new Notification(pieceId, message);
    await this.notificationRepository.saveNotification(notification);
  }
}
