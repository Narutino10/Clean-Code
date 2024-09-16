import { Moto } from '../../domain/entities/Moto';

export interface MotoRepository {
  findById(id: string): Promise<Moto | null>;
  update(moto: Moto): Promise<void>;
  // Autres méthodes si nécessaire
}
