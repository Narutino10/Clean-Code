// src/interface/controllers/MotoController.ts
import { Request, Response } from 'express';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { ModeleMotoRepository } from '../../application/repositories/ModeleMotoRepository'; 
import { EventStore } from '../../application/event-store/EventStore';
import { CreateMotoUseCase } from '../../application/use-cases/CreateMotoUseCase';
import { GetAllMotosUseCase } from '../../application/use-cases/GetAllMotosUseCase';

export class MotoController {
  private createMotoUseCase: CreateMotoUseCase;
  private getAllMotosUseCase: GetAllMotosUseCase;

  constructor(
    private motoRepository: MotoRepository, 
    private modeleMotoRepository: ModeleMotoRepository, // Ajoutez cette ligne
    private eventStore: EventStore
  ) {
    this.createMotoUseCase = new CreateMotoUseCase(this.motoRepository, this.modeleMotoRepository); 
    this.getAllMotosUseCase = new GetAllMotosUseCase(this.motoRepository);
  }

  public async createMoto(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body;
      const moto = await this.createMotoUseCase.execute(data);
      res.status(201).json(moto);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  public async getAllMotos(req: Request, res: Response): Promise<void> {
    try {
      const motos = await this.getAllMotosUseCase.execute();
      res.status(200).json(motos);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
