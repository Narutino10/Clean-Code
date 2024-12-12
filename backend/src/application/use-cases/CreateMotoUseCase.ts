import { MotoRepository } from "../repositories/MotoRepository";
import { Moto } from "../../domain/entities/Moto";
import { ModeleMotoRepository } from "../repositories/ModeleMotoRepository"; // Importez le repository de ModeleMoto

interface CreateMotoDTO {
    modeleId: string; // Utilisez un identifiant pour le modèle de moto
    kilometrage: number;
    dateDernierEntretien: Date;
}

export class CreateMotoUseCase {
    constructor(
        private motoRepository: MotoRepository,
        private modeleMotoRepository: ModeleMotoRepository // Injectez le repository de ModeleMoto
    ) {}

    async execute(data: CreateMotoDTO): Promise<Moto> {
        const moto = new Moto();

        // Recherchez le modèle de moto par son identifiant
        const modele = await this.modeleMotoRepository.findById(data.modeleId);
        if (!modele) {
            throw new Error("Modèle de moto non trouvé");
        }

        moto.modele = modele; // Assignez l'objet ModeleMoto trouvé
        moto.kilometrage = data.kilometrage;
        moto.dateDernierEntretien = data.dateDernierEntretien;

        return await this.motoRepository.saveMoto(moto);
    }
}
