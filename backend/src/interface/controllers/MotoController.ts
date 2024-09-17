import { Request, Response } from 'express';
import { Mediator } from '../../application/mediator/Mediator';
import { CreateMotoCommand } from '../../application/commands/CreateMotoCommand';
import { GetAllMotosQuery } from '../../application/queries/GetAllMotosQuery';

export class MotoController {
  constructor(private mediator: Mediator) {}

  async createMoto(req: Request, res: Response): Promise<Response> {
    try {
      const command = new CreateMotoCommand(
        req.body.modele,
        req.body.kilometrage,
        new Date(req.body.dateDernierEntretien)
      );
      await this.mediator.send(command);
      return res.status(201).json({ message: 'Moto créée avec succès' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAllMotos(req: Request, res: Response): Promise<Response> {
    try {
      const query = new GetAllMotosQuery();
      const motos = await this.mediator.send(query);
      return res.status(200).json(motos);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
