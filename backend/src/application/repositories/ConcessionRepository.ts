import { Repository, DataSource } from 'typeorm';
import { Concession } from '../../domain/entities/Concession';

export class ConcessionRepository extends Repository<Concession> {
    constructor(dataSource: DataSource) {
        super(Concession, dataSource.manager);
    }

    // Trouver une concession par ID
    async findById(id: string): Promise<Concession | null> {
        return this.findOne({ where: { id } });
    }

    // Trouver toutes les concessions
    async findAll(): Promise<Concession[]> {
        return this.find();
    }

    // Ajouter une nouvelle concession
    async createConcession(concessionData: Partial<Concession>): Promise<Concession> {
        const concession = this.create(concessionData);
        return await this.save(concession);
    }

    // Mettre à jour une concession existante
    async updateConcession(id: string, concessionData: Partial<Concession>): Promise<Concession | null> {
        await this.update(id, concessionData);
        return this.findById(id);
    }

    // Supprimer une concession par ID
    async deleteConcession(id: string): Promise<void> {
        await this.delete(id);
    }
}
