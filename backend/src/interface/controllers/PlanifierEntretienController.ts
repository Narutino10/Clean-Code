import { Request, Response } from 'express';
import { PlanifierEntretienUseCase } from '../../application/use-cases/PlanifierEntretienUseCase';
import { TypeORMMotoRepository } from '../../application/repositories/TypeORMMotoRepository';
import { ModeleMotoRepository } from '../../application/repositories/ModeleMotoRepository';
import { AppDataSource } from '../../data-source';

const motoRepository = new TypeORMMotoRepository();
const modeleMotoRepository = new ModeleMotoRepository(AppDataSource);

const planifierEntretienUseCase = new PlanifierEntretienUseCase(motoRepository, modeleMotoRepository);

export class PlanifierEntretienController {
    public async planifier(req: Request, res: Response): Promise<void> {
        try {
            const { motoId } = req.params;
            await planifierEntretienUseCase.execute(motoId);
            res.status(200).json({ message: 'Entretien planifié avec succès' });
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erreur inconnue' });
            }
        }
    }
}
