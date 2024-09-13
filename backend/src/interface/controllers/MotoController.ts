import { Request, Response } from "express";
import { PlanifierEntretienUseCase } from "../../application/use-cases/PlanifierEntretienUseCase";
import { Moto } from "../../domain/entities/Moto";

export class MotoController {
  planifierEntretien(req: Request, res: Response): void {
    const { id, modele, kilometrage, dateDernierEntretien } = req.body;
    const moto = new Moto(id, modele, kilometrage, new Date(dateDernierEntretien));
    const useCase = new PlanifierEntretienUseCase();
    useCase.execute(moto);
    res.status(200).send(`Entretien planifié pour la moto ${modele}`);
  }
}
