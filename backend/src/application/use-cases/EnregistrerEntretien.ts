
import { EntretienRepository } from '../repositories/EntretienRepository';
import { MotoRepository } from '../repositories/MotoRepository';
import { Entretien } from '../../domain/entities/Entretien';

export class EnregistrerEntretien {
  constructor(
    private entretienRepository: EntretienRepository,
    private motoRepository: MotoRepository
  ) {}

  public async execute(data: {
    motoId: string;
    date: Date;
    description: string;
    piecesChangees: string[];
    coutTotal: number;
    recommandations: string;
  }): Promise<void> {
    const moto = await this.motoRepository.findById(data.motoId);
    if (!moto) throw new Error('Moto non trouvée');

    const entretien = new Entretien();
    entretien.moto = moto;
    entretien.date = data.date;
    entretien.description = data.description;
    entretien.piecesChangees = data.piecesChangees;
    entretien.coutTotal = data.coutTotal;
    entretien.recommandations = data.recommandations;

    await this.entretienRepository.save(entretien);
  }
}
