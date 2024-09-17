import { MotoRepository } from "../repositories/MotoRepository";
import { Moto } from "../../domain/entities/Moto";

interface CreateMotoDTO {  
    modele: string;
    kilometrage: number;
    dateDernierEntretien: Date;
}

export class CreateMotoUseCase {
    constructor(private motoRepository: MotoRepository) {}

    async execute(data: CreateMotoDTO): Promise<Moto> {
        const moto = new Moto();
        moto.modele = data.modele;
        moto.kilometrage = data.kilometrage;
        moto.dateDernierEntretien = data.dateDernierEntretien;

        return await this.motoRepository.save(moto);
    }
}