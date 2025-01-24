import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Concession } from '../../domain/entities/Concession';
import { ConcessionRepository } from '../../application/repositories/ConcessionRepository';

export class TypeORMConcessionRepository {
    private repository: Repository<Concession>;

    constructor() {
        this.repository = AppDataSource.getRepository(Concession);
    }

    async findById(id: string): Promise<Concession | null> {
        return await this.repository.findOne({ where: { id }, relations: ['motos'] });
    }

    async findAll(): Promise<Concession[]> {
        return await this.repository.find({ relations: ['motos'] });
    }

    async createConcession(concession: Partial<Concession>): Promise<Concession> {
        const newConcession = this.repository.create(concession);
        return await this.repository.save(newConcession);
    }

    async updateConcession(id: string, concessionData: Partial<Concession>): Promise<Concession | null> {
        await this.repository.update(id, concessionData);
        return await this.findById(id);
    }

    async deleteConcession(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}