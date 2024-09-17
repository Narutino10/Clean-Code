import { Repository } from 'typeorm';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { Moto } from '../../domain/entities/Moto';
import { AppDataSource } from '../../data-source';

export class TypeORMMotoRepository implements MotoRepository {
  private repository: Repository<Moto>;

  constructor() {
    this.repository = AppDataSource.getRepository(Moto);
  }

  async save(moto: Moto): Promise<Moto> {
    return await this.repository.save(moto);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findAll(): Promise<Moto[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Moto | null> {
    return await this.repository.findOneBy({ id }) || null;
  }

  async update(moto: Moto): Promise<Moto> {
    return await this.repository.save(moto);
  }
}
