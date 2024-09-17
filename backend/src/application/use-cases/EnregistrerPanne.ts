import { PanneRepository } from '../repositories/PanneRepository';
import { MotoRepository } from '../repositories/MotoRepository';
import { Panne } from '../../domain/entities/Panne';

export class EnregistrerPanne {
  constructor(
    private panneRepository: PanneRepository,
    private motoRepository: MotoRepository
  ) {}

  public async execute(data: {
    motoId: string;
    date: Date;
    description: string;
    estSousGarantie: boolean;
    actionCorrective: string;
  }): Promise<void> {
    const moto = await this.motoRepository.findById(data.motoId);
    if (!moto) throw new Error('Moto non trouvée');

    const panne = new Panne();
    panne.moto = moto;
    panne.date = data.date;
    panne.description = data.description;
    panne.estSousGarantie = data.estSousGarantie;
    panne.actionCorrective = data.actionCorrective;

    await this.panneRepository.save(panne);
  }
}
