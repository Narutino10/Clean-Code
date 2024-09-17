import { MotoRepository } from '../../application/repositories/MotoRepository';
import { Moto } from '../../domain/entities/Moto';
import { getRepository } from 'typeorm';

export class TypeORMMotoRepository implements MotoRepository {
  private ormRepository = getRepository(Moto);

  async findById(id: string): Promise<Moto | null> {
    return await this.ormRepository.findOne(id) || null;
  }

  async findAll(): Promise<Moto[]> {
    return await this.ormRepository.find();
  }

  async save(moto: Moto): Promise<Moto> {
    return await this.ormRepository.save(moto);
  }

  async update(moto: Moto): Promise<Moto> {
    return await this.ormRepository.save(moto);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
