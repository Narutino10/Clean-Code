import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { ModeleMoto } from '../../domain/entities/ModeleMoto';

export class ModeleMotoRepository {
  private repository: Repository<ModeleMoto>;

  constructor() {
    this.repository = AppDataSource.getRepository(ModeleMoto);
  }

  async findAll(): Promise<ModeleMoto[]> {
    return this.repository.find();
  }

  async save(modele: ModeleMoto): Promise<ModeleMoto> {
    return this.repository.save(modele);
  }
}
