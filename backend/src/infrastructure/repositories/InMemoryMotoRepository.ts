import { MotoRepository } from '../../application/repositories/MotoRepository';
import { Moto } from '../../domain/entities/Moto';

export class InMemoryMotoRepository implements MotoRepository {
  private motos: Moto[] = [];

  public async findById(id: string): Promise<Moto | null> {
    const moto = this.motos.find(m => m.id === id);
    return moto || null;
  }

  public async update(moto: Moto): Promise<void> {
    const index = this.motos.findIndex(m => m.id === moto.id);
    if (index !== -1) {
      this.motos[index] = moto;
    } else {
      this.motos.push(moto);
    }
  }

  // Implémentation des autres méthodes si nécessaire
}