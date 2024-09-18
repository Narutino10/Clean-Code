// src/application/repositories/ModeleMotoRepository.ts
import { Repository } from 'typeorm';
import { ModeleMoto } from '../../domain/entities/ModeleMoto';
import { DataSource } from 'typeorm';

export class ModeleMotoRepository extends Repository<ModeleMoto> {
    constructor(dataSource: DataSource) {  // Attendre dataSource comme argument
        super(ModeleMoto, dataSource.manager);
    }

    async findById(id: string): Promise<ModeleMoto | null> {
        return this.findOneBy({ id });
    }
}
