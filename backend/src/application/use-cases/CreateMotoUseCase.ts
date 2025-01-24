import { MotoRepository } from "../repositories/MotoRepository";
import { Moto } from "../../domain/entities/Moto";
import { ModeleMotoRepository } from "../repositories/ModeleMotoRepository";
import { ConcessionRepository } from "../repositories/ConcessionRepository"; // Ajout du repository pour la concession

interface CreateMotoDTO {
    modeleId: string; // Utilisez un identifiant pour le modèle de moto
    kilometrage: number;
    dateDernierEntretien: Date;
    concessionId: string; // Ajout de l'ID de la concession
}

export class CreateMotoUseCase {
    constructor(
        private motoRepository: MotoRepository,
        private modeleMotoRepository: ModeleMotoRepository,
        private concessionRepository: ConcessionRepository // Injection du repository de la concession
    ) {}

    async execute(data: CreateMotoDTO): Promise<Moto> {
        const moto = new Moto();

        // Recherchez le modèle de moto par son identifiant
        const modele = await this.modeleMotoRepository.findById(data.modeleId);
        if (!modele) {
            throw new Error("Modèle de moto non trouvé");
        }

        // Recherchez la concession par son identifiant
        const concession = await this.concessionRepository.findById(data.concessionId);
        if (!concession) {
            throw new Error("Concession non trouvée");
        }

        moto.concession = concession;
        moto.maintenances = [];
        moto.incidents = [];
        moto.warranties = [];

        return await this.motoRepository.saveMoto(moto);
    }
}
