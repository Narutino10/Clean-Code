import { MotoRepository } from '../../application/repositories/MotoRepository';
import { Moto } from '../../domain/entities/Moto';

export class InMemoryMotoRepository implements MotoRepository {
  private motos: Moto[] = [];

  async save(moto: Moto): Promise<void> {
    this.motos.push(moto);
  }

  async delete(id: string): Promise<void> {
    this.motos = this.motos.filter(m => m.id !== id);
  }

  async findAll(): Promise<Moto[]> {
    return this.motos;
  }

  async findById(id: string): Promise<Moto | null> {
    return this.motos.find(m => m.id === id) || null;
  }

  async update(moto: Moto): Promise<void> {
    const index = this.motos.findIndex(m => m.id === moto.id);
    if (index !== -1) {
      this.motos[index] = moto;
    }
  }
}
