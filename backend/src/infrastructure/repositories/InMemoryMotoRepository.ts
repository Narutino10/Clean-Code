import { MotoRepository } from "../../application/repositories/MotoRepository";
import { Moto } from "../../domain/entities/Moto";

export class InMemoryMotoRepository implements MotoRepository {
  private motos: Moto[] = [];

  async save(moto: Moto): Promise<Moto> {
    if (!moto.id) {
      moto.id = this.generateId();
    }
    this.motos.push(moto);
    return moto;
  }

  async delete(id: string): Promise<void> {
    this.motos = this.motos.filter(moto => moto.id !== id);
  }

  async findAll(): Promise<Moto[]> {
    return this.motos;
  }

  async findById(id: string): Promise<Moto | null> {
    const moto = this.motos.find(moto => moto.id === id);
    return moto || null;
  }

  async update(moto: Moto): Promise<Moto> {
    const index = this.motos.findIndex(m => m.id === moto.id);
    if (index === -1) throw new Error('Moto not found');
    this.motos[index] = moto;
    return moto;
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
