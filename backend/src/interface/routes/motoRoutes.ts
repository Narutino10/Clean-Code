import { Router } from 'express';
import { MotoController } from '../controllers/MotoController';
import { PlanifierEntretienController } from '../controllers/PlanifierEntretienController';
import { TypeORMEntretienRepository } from '../../infrastructure/repositories/TypeORMEntretienRepository';

export const createMotoRoutes = (
  motoController: MotoController,
  entretienRepository: TypeORMEntretienRepository
): Router => {
  const router = Router();

  router.get('/', (req, res) => motoController.getAllMotos(req, res));
  router.post('/', (req, res) => motoController.createMoto(req, res));
  router.get('/:id', (req, res) => motoController.getMotoById(req, res));
  router.post('/:motoId/planifier', (req, res) => {
    const planifierController = new PlanifierEntretienController();
    planifierController.planifier(req, res);
  });
  

  return router;
};

export default createMotoRoutes;
