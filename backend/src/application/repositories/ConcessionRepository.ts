import { Repository, DataSource } from 'typeorm';
import { Concession } from '../../domain/entities/Concession';

export class ConcessionRepository {
    private repository: Repository<Concession>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Concession);
    }

    // Trouver une concession par ID
    async findById(id: string): Promise<Concession | null> {
        return await this.repository.findOne({ where: { id } });
    }

    // Trouver toutes les concessions
    async findAll(): Promise<Concession[]> {
        return await this.repository.find();
    }

    // Ajouter une nouvelle concession
    async createConcession(concessionData: Partial<Concession>): Promise<Concession> {
        const concession = this.repository.create(concessionData);
        return await this.repository.save(concession);
    }

    // Mettre à jour une concession existante
    async updateConcession(id: string, concessionData: Partial<Concession>): Promise<Concession | null> {
        await this.repository.update(id, concessionData);
        return this.findById(id);
    }

    // Supprimer une concession par ID
    async deleteConcession(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}