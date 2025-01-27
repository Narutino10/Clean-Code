import cron from 'node-cron';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { NotificationService } from '../../application/services/NotificationService';
import { Moto } from '../../domain/entities/Moto';

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
        if (this.estEntretienDu(moto, aujourdHui)) {
          await this.notificationService.envoyerRappel(
            moto.id,
            'Votre moto nécessite un entretien'
          );
        }
      });
    });
  }

  private estEntretienDu(moto: Moto, date: Date): boolean {
    // Vérification si la date d'entretien existe
    if (!moto.dateDernierEntretien) {
      return false;  // Éviter l'erreur si la date est undefined
    }

    const dernierEntretien = new Date(moto.dateDernierEntretien);

    if (
      moto.intervalleEntretienKm &&
      moto.kilometrage >= moto.intervalleEntretienKm
    ) {
      return true;
    }

    if (
      moto.intervalleEntretienTemps &&
      date.getTime() - dernierEntretien.getTime() >=
        moto.intervalleEntretienTemps * 24 * 60 * 60 * 1000
    ) {
      return true;
    }

    return false;
  }
}
