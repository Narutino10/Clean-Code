import { Moto } from '../../domain/entities/Moto';

export interface MotoRepository {
  findById(id: string): Promise<Moto | null>;
  update(moto: Moto): Promise<void>;
  save(moto: Moto): Promise<void>;
  delete(id: string): Promise<void>;
  findAll(): Promise<Moto[]>;
}
