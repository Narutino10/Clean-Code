import { Repository } from 'typeorm';
import { Moto } from '../../domain/entities/Moto';

export interface MotoRepository {
  save(moto: Moto): Promise<Moto>; // Changement de Promise<void> à Promise<Moto>
  delete(id: string): Promise<void>;
  findAll(): Promise<Moto[]>;
  findById(id: string): Promise<Moto | null>;
  update(moto: Moto): Promise<Moto>;
  findOne(criteria: Partial<Moto>): Promise<Moto | null>;
}
