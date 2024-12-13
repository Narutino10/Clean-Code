import { FindOneOptions, Repository } from 'typeorm';
import { Moto } from '../../domain/entities/Moto';

export interface MotoRepository {
  saveMoto(moto: Moto): Promise<Moto>; // Changement de Promise<void> à Promise<Moto>
  deleteMoto(id: string): Promise<void>;
  find(options?: any): Promise<Moto[]>;
  findAll(): Promise<Moto[]>;
  findById(id: string): Promise<Moto | null>;
  updateMoto(moto: Moto): Promise<Moto>;
  findOne(options: FindOneOptions<Moto>): Promise<Moto | null>;
}
