import { Repository } from 'typeorm';
import { Moto } from '../../domain/entities/Moto';
import { MotoRepository } from './MotoRepository';
import { AppDataSource } from '../../data-source';

export class TypeORMMotoRepository extends Repository<Moto> implements MotoRepository {
    constructor() {
        super(Moto, AppDataSource.manager);
    }

    async findAll(): Promise<Moto[]> {
        return this.find();
    }

    async findById(id: string): Promise<Moto | null> {
        return this.findOne({ where: { id } });
    }

    async save(moto: Moto): Promise<Moto> {
      return await this.manager.save(Moto, moto); // Utilisation de `save` correctement typée
    }
  

    async update(criteria: string | FindOptionsWhere<Moto>, partialEntity: Partial<Moto>): Promise<void> {
      await this.manager.update(Moto, criteria, partialEntity); // Retourne `void` pour la conformité
  }
  
}
