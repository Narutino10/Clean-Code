// src/interface/controllers/MotoController.ts

import { Request, Response } from 'express';
import { CreateMotoUseCase } from '../../application/use-cases/CreateMotoUseCase';
import { GetAllMotosUseCase } from '../../application/use-cases/GetAllMotosUseCase';

export class MotoController {
  constructor(
    private createMotoUseCase: CreateMotoUseCase,
    private getAllMotosUseCase: GetAllMotosUseCase
  ) {}

  async createMoto(req: Request, res: Response): Promise<Response> {
    try {
      const { modele, kilometrage, dateDernierEntretien } = req.body;
      const moto = await this.createMotoUseCase.execute({
        modele,
        kilometrage,
        dateDernierEntretien,
      });
      return res.status(201).json(moto);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAllMotos(req: Request, res: Response): Promise<Response> {
    try {
      const motos = await this.getAllMotosUseCase.execute();
      return res.status(200).json(motos);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Ajoute d'autres méthodes pour update, delete, etc.
}
