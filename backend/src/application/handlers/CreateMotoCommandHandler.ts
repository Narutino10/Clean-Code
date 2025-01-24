import { CreateMotoCommand } from "../commands/CreateMotoCommand";
import { MotoRepository } from "../repositories/MotoRepository";
import { ModeleMotoRepository } from "../repositories/ModeleMotoRepository";
import { Concession } from "../../domain/entities/Concession";
import { Moto } from "../../domain/entities/Moto";
import { ConcessionRepository } from "../repositories/ConcessionRepository"; // Assure-toi d'avoir ce repository

export class CreateMotoCommandHandler {
    constructor(
        private readonly motoRepository: MotoRepository,
        private readonly modeleMotoRepository: ModeleMotoRepository,
        private readonly concessionRepository: ConcessionRepository
    ) {}

    public async handle(command: CreateMotoCommand): Promise<Moto> {
        const { modele, kilometrage, dateDernierEntretien, concessionId } = command;

        // Vérifier si le modèle de moto existe
        const modeleMoto = await this.modeleMotoRepository.findByName(modele);
        if (!modeleMoto) {
            throw new Error(`Le modèle de moto '${modele}' n'existe pas.`);
        }

        // Vérifier si la concession existe
        const foundConcession = await this.concessionRepository.findById(concessionId);
        if (!foundConcession) {
            throw new Error(`La concession avec l'ID '${concessionId}' n'existe pas.`);
        }

        // Création de la moto
        const moto = new Moto();
        moto.concession = foundConcession;
        moto.maintenances = [];
        moto.incidents = [];
        moto.warranties = [];

        // Sauvegarder la moto
        await this.motoRepository.saveMoto(moto);

        return moto;
    }
}
