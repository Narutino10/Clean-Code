import { Repository, DataSource } from 'typeorm';
import { ModeleMoto } from '../../domain/entities/ModeleMoto';

export class ModeleMotoRepository extends Repository<ModeleMoto> {
    constructor(dataSource: DataSource) {
        super(ModeleMoto, dataSource.manager);
    }

    async findById(id: string): Promise<ModeleMoto | null> {
        return this.findOneBy({ id });
    }

    // Ajout de la méthode findByName
    async findByName(nom: string): Promise<ModeleMoto | null> {
        return this.findOne({ where: { nom } });
    }

    // Ajout de la méthode findAll
    async findAll(): Promise<ModeleMoto[]> {
        return this.find(); // Renvoie tous les modèles
    }
}
