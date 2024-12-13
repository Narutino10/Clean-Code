import { Entretien } from "../../domain/entities/Entretien";
import { EntretienRepository } from "../../application/repositories/EntretienRepository";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";

export class TypeORMEntretienRepository implements EntretienRepository {
    private repository: Repository<Entretien>;

    constructor() {
        this.repository = AppDataSource.getRepository(Entretien);
    }

    async save(entretien: Entretien): Promise<void> {
        await this.repository.save(entretien);
    }

    async findById(id: string): Promise<Entretien | null> {
        return await this.repository.findOne({ where: { id } });
    }

    async findAll(): Promise<Entretien[]> {
        return await this.repository.find();
    }

    async getEntretiensByMotoId(motoId: string): Promise<Entretien[]> {
        return await this.repository.find({ where: { moto: { id: motoId } } });
    }

    create(entretien: Partial<Entretien>): Entretien { // Implémentation de la méthode create
        return this.repository.create(entretien);
    }
}
