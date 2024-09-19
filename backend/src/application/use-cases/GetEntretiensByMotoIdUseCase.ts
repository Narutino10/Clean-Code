import { EntretienRepository } from "../repositories/EntretienRepository";

export class GetEntretiensByMotoIdUseCase {
  constructor(private entretienRepository: EntretienRepository) {}

  async execute(motoId: string) {
    const entretiens = await this.entretienRepository.getEntretiensByMotoId(motoId);
    if (!entretiens) {
      throw new Error(`Aucun entretien trouvé pour la moto avec l'ID ${motoId}`);
    }
    return entretiens;
  }
}
