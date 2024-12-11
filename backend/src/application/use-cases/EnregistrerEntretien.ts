// Exemple corrigé pour EnregistrerEntretien.ts
import { EntretienRepository } from "../repositories/EntretienRepository";
import { MotoRepository } from "../repositories/MotoRepository";
import { Entretien } from "../../domain/entities/Entretien";

interface EnregistrerEntretienParams {
    motoId: string;
    date: Date;
    description: string;
    piecesChangees: string[];
    coutTotal: number;
    recommandations?: string;
}

export class EnregistrerEntretien {
    constructor(
        private readonly entretienRepository: EntretienRepository,
        private readonly motoRepository: MotoRepository
    ) {}

    public async execute(params: EnregistrerEntretienParams): Promise<Entretien> {
        const { motoId, date, description, piecesChangees, coutTotal, recommandations } = params;

        // Vérifier si la moto existe
        const moto = await this.motoRepository.findById(motoId);
        if (!moto) {
            throw new Error(`La moto avec l'ID '${motoId}' n'existe pas.`);
        }

        // Créer un nouvel entretien
        const entretien = new Entretien();
        entretien.moto = moto;
        entretien.date = date;
        entretien.description = description;
        entretien.piecesChangees = piecesChangees;
        entretien.coutTotal = coutTotal;
        entretien.recommandations = recommandations;

        // Sauvegarder l'entretien
        await this.entretienRepository.save(entretien);

        return entretien;
    }
}