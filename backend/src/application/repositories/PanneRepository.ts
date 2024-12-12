import { Repository } from "typeorm";
import { Panne } from "../../domain/entities/Panne";
import { DataSource } from "typeorm";

export class PanneRepository extends Repository<Panne> {
    constructor(dataSource: DataSource) {
        super(Panne, dataSource.manager);
    }
}