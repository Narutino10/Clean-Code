import { Request, Response } from "express";
import { PlanifierEntretien } from "../../application/use-cases/PlanifierEntretienUseCase";
import { Moto } from "../../domain/entities/Moto";
import { InMemoryMotoRepository } from "../../infrastructure/repositories/InMemoryMotoRepository";

export class MotoController {
  planifierEntretien(req: Request, res: Response): void {
    const { id, modele, kilometrage, dateDernierEntretien, dateEntretien } = req.body;

    // Création de l'entité Moto
    const moto = new Moto(id, modele, kilometrage, new Date(dateDernierEntretien));

    // Instanciation du repository
    const motoRepository = new InMemoryMotoRepository();

    // Instanciation du cas d'utilisation avec le repository
    const useCase = new PlanifierEntretien(motoRepository);

    // Exécution du cas d'utilisation avec les deux arguments requis
    useCase.execute(moto, new Date(dateEntretien));

    res.status(200).send(`Entretien planifié pour la moto ${modele}`);
  }
}
