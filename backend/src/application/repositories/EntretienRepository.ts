import { Entretien } from "../../domain/entities/Entretien";

export interface EntretienRepository {
    save(entretien: Entretien): Promise<void>;
    findById(id: string): Promise<Entretien | null>;
    findAll(): Promise<Entretien[]>;
}