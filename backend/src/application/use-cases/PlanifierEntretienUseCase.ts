import { MotoRepository } from '../repositories/MotoRepository';
import { ModeleMotoRepository } from '../repositories/ModeleMotoRepository';

export class PlanifierEntretienUseCase {
    constructor(
        private motoRepository: MotoRepository,
        private modeleMotoRepository: ModeleMotoRepository
    ) {}

    public async execute(motoId: string): Promise<void> {
        const moto = await this.motoRepository.findById(motoId);
        if (!moto) {
            throw new Error('Moto non trouvée');
        }

        // Vérifie si la moto a bien un modèle
        if (!moto.modele) {
            throw new Error('La moto n\'a pas de modèle associé.');
        }

        const modele = await this.modeleMotoRepository.findById(moto.modele.id);
        if (!modele) {
            throw new Error('Modèle de moto non trouvé');
        }

        moto.intervalleEntretienKm = modele.entretienIntervalKm;
        moto.intervalleEntretienTemps = modele.entretienIntervalTemps;

        await this.motoRepository.updateMoto(moto);
    }
}
