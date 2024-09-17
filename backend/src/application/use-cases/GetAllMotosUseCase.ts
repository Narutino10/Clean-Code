import { MotoRepository } from "../repositories/MotoRepository";
import { Moto } from "../../domain/entities/Moto";

export class GetAllMotosUseCase {
    constructor(private motoRepository: MotoRepository) {}

    async execute(): Promise<Moto[]> {
        return await this.motoRepository.findAll();
    }
}