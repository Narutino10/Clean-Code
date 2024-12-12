// Exemple corrigé pour CreateMotoCommandHandler.ts
import { CreateMotoCommand } from "../commands/CreateMotoCommand";
import { MotoRepository } from "../repositories/MotoRepository";
import { ModeleMotoRepository } from "../repositories/ModeleMotoRepository";
import { Moto } from "../../domain/entities/Moto";

export class CreateMotoCommandHandler {
    constructor(
        private readonly motoRepository: MotoRepository,
        private readonly modeleMotoRepository: ModeleMotoRepository
    ) {}

    public async handle(command: CreateMotoCommand): Promise<Moto> {
        const { modele, kilometrage, dateDernierEntretien } = command;

        // Récupérer le modèle de moto à partir du repository
        const modeleMoto = await this.modeleMotoRepository.findByName(modele);
        if (!modeleMoto) {
            throw new Error(`Le modèle de moto '${modele}' n'existe pas.`);
        }

        // Créer une nouvelle instance de Moto
        const moto = new Moto();
        moto.modele = modeleMoto;
        moto.kilometrage = kilometrage;
        moto.dateDernierEntretien = dateDernierEntretien;

        // Sauvegarder la moto dans le repository
        await this.motoRepository.saveMoto(moto);

        return moto;
    }
}
