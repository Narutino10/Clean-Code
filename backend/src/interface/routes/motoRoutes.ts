import { Router } from 'express';
import { MotoController } from '../controllers/MotoController';

const createMotoRoutes = (
  motoController: MotoController,
  entretienRepository: any // Assure-toi que cet argument est fourni
): Router => {
  const router = Router();

  router.get('/motos', (req, res) => motoController.getAllMotos(req, res));
  router.post('/motos', (req, res) => motoController.createMoto(req, res));
  router.get('/motos/:id', (req, res) => motoController.getMotoById(req, res));

  return router;
};

export default createMotoRoutes;
