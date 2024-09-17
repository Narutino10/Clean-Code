import { MotoRepository } from '../repositories/MotoRepository';
import { ModeleMotoRepository } from '../repositories/ModeleMotoRepository';
import { Moto } from '../../domain/entities/Moto';

export class PlanifierEntretiens {
  constructor(
    private motoRepository: MotoRepository,
    private modeleMotoRepository: ModeleMotoRepository
  ) {}

  public async execute(motoId: string): Promise<void> {
    const moto = await this.motoRepository.findById(motoId);
    if (!moto) throw new Error('Moto non trouvée');

    const modele = await this.modeleMotoRepository.findByName(moto.modele);
    if (!modele) throw new Error('Modèle de moto non trouvé');

    moto.intervalleEntretienKm = modele.intervalleEntretienKm;
    moto.intervalleEntretienTemps = modele.intervalleEntretienTemps;

    await this.motoRepository.update(moto);
  }
}
