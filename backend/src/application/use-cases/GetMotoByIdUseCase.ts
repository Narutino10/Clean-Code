import { MotoRepository } from "../repositories/MotoRepository"; // Assurez-vous d'utiliser le bon chemin
import { Moto } from "../../domain/entities/Moto";

export class GetMotoByIdUseCase {
    constructor(private motoRepository: MotoRepository) {}

    async execute(motoId: string): Promise<Moto | null> {
        const moto = await this.motoRepository.findById(motoId);
        if (!moto) {
            throw new Error('Moto non trouvée');
        }
        return moto;
    }
}
