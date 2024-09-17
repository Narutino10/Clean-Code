// src/infrastructure/scheduler/EntretienScheduler.ts

import cron from 'node-cron';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { NotificationService } from '../../application/services/NotificationService';

export class EntretienScheduler {
  constructor(
    private motoRepository: MotoRepository,
    private notificationService: NotificationService
  ) {}

  public start(): void {
    cron.schedule('0 0 * * *', async () => {
      const motos = await this.motoRepository.findAll();
      const aujourdHui = new Date();

      motos.forEach(async (moto) => {
        const entretienDu = // Logique pour déterminer si un entretien est dû
          this.estEntretienDu(moto, aujourdHui);
        if (entretienDu) {
          await this.notificationService.envoyerRappel(
            moto.id,
            'Votre moto nécessite un entretien'
          );
        }
      });
    });
  }

  private estEntretienDu(moto: Moto, date: Date): boolean {
    // Logique pour déterminer si un entretien est dû
    }
}
