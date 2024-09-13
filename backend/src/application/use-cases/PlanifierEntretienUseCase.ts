import { Moto } from "../../domain/entities/Moto";

export class PlanifierEntretienUseCase {
  execute(moto: Moto): void {
    // Logique pour planifier un entretien
    console.log(`Planification de l'entretien pour la moto ${moto.modele}`);
  }
}
