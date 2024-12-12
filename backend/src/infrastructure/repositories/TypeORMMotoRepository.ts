import { Repository, FindOptionsWhere, UpdateResult, DeleteResult, FindOneOptions } from 'typeorm';
import { Moto } from '../../domain/entities/Moto';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { AppDataSource } from '../../data-source';

export class TypeORMMotoRepository extends Repository<Moto> implements MotoRepository {
    constructor() {
        super(Moto, AppDataSource.manager);
    }

    async saveMoto(moto: Moto): Promise<Moto> {
        // Appel direct de la méthode save du Repository
        return await AppDataSource.getRepository(Moto).save(moto);
    }

    async deleteMoto(id: string): Promise<void> {
        // Appel de la méthode delete et gestion des résultats
        const result: DeleteResult = await AppDataSource.getRepository(Moto).delete({ id });
        if (result.affected === 0) {
            throw new Error(`Aucune moto trouvée avec l'ID ${id}`);
        }
    }

    async findAll(): Promise<Moto[]> {
        return await AppDataSource.getRepository(Moto).find();
    }

    async findById(id: string): Promise<Moto | null> {
        return await AppDataSource.getRepository(Moto).findOne({ where: { id } });
    }

    async updateMoto(moto: Moto): Promise<Moto> {
        const result: UpdateResult = await AppDataSource.getRepository(Moto).update(moto.id, moto);
        if (result.affected === 0) {
            throw new Error(`Aucune mise à jour effectuée pour l'ID ${moto.id}`);
        }
        return moto; // Retourne la moto mise à jour
    }

    async findOne(options: FindOneOptions<Moto>): Promise<Moto | null> {
        return await AppDataSource.getRepository(Moto).findOne(options);
    }
}
