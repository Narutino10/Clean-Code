import { MotoRepository } from "../repositories/MotoRepository";
import { Moto } from "../../domain/entities/Moto";
import { ModeleMotoRepository } from "../repositories/ModeleMotoRepository";
import { ConcessionRepository } from "../repositories/ConcessionRepository"; 

interface CreateMotoDTO {
    modeleId: string; 
    kilometrage: number;
    dateDernierEntretien: Date;
    concessionId: string; 
}

export class CreateMotoUseCase {
    constructor(
        private motoRepository: MotoRepository,
        private modeleMotoRepository: ModeleMotoRepository,
        private concessionRepository: ConcessionRepository 
    ) {}

    async execute(data: CreateMotoDTO): Promise<Moto> {
        const moto = new Moto();

        const modele = await this.modeleMotoRepository.findById(data.modeleId);
        if (!modele) {
            throw new Error("Modèle de moto non trouvé");
        }

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
