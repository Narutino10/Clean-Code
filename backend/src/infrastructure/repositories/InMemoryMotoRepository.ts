import { Moto } from '../../domain/entities/Moto';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { FindOneOptions } from 'typeorm';


export class InMemoryMotoRepository implements MotoRepository {
    private motos: Moto[] = [];

    async saveMoto(moto: Moto): Promise<Moto> {
        this.motos.push(moto);
        return moto;
    }

    async deleteMoto(id: string): Promise<void> {
        this.motos = this.motos.filter((moto) => moto.id !== id);
    }

    async findAll(): Promise<Moto[]> {
        return this.motos;
    }

    async findById(id: string): Promise<Moto | null> {
        return this.motos.find((moto) => moto.id === id) || null;
    }

    async updateMoto(moto: Moto): Promise<Moto> {
        const index = this.motos.findIndex((m) => m.id === moto.id);
        if (index !== -1) {
            this.motos[index] = moto;
            return moto;
        }
        throw new Error('Moto non trouvée');
    }

    async findOne(options: FindOneOptions<Moto>): Promise<Moto | null> {
        return this.motos.find((moto) =>
            Object.entries(options).every(([key, value]) => moto[key as keyof Moto] === value)
        ) || null;
    }

    async find(options?: Partial<Moto>): Promise<Moto[]> {
        if (!options) {
            return this.motos;
        }
        return this.motos.filter((moto) =>
            Object.entries(options).every(([key, value]) => moto[key as keyof Moto] === value)
        );
    }
}
