import { Request, Response } from 'express';
import { PlanifierEntretiens } from '../../application/use-cases/PlanifierEntretiens';

export class MotoController {
  constructor(
    private planifierEntretiensUseCase: PlanifierEntretiens,
    // autres cas d'utilisation
  ) {}

  public async planifierEntretiens(req: Request, res: Response): Promise<void> {
    try {
      const { motoId } = req.body;
      await this.planifierEntretiensUseCase.execute(motoId);
      res.status(200).json({ message: 'Entretiens planifiés avec succès' });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  // src/interface/controllers/MotoController.ts

public async mettreAJourKilometrage(req: Request, res: Response): Promise<void> {
  try {
    const { motoId, kilometrage } = req.body;
    const moto = await this.motoRepository.findById(motoId);
    if (!moto) throw new Error('Moto non trouvée');

    moto.kilometrage = kilometrage;
    await this.motoRepository.update(moto);

    res.status(200).json({ message: 'Kilométrage mis à jour' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

}
