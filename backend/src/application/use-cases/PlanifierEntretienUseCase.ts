import { Moto } from '../../domain/entities/Moto';
import { MotoRepository } from '../repositories/MotoRepository';

export class PlanifierEntretien {
  private motoRepository: MotoRepository;

  constructor(motoRepository: MotoRepository) {
    this.motoRepository = motoRepository;
  }

  public async execute(moto: Moto, dateEntretien: Date): Promise<void> {
    // Logique pour planifier l'entretien
    moto.dateProchainEntretien = dateEntretien;

    // Sauvegarder les modifications
    await this.motoRepository.update(moto);
  }
}
