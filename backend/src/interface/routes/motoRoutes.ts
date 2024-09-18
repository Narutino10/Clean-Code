import { Router, Request, Response, NextFunction } from 'express';
import { MotoController } from '../controllers/MotoController';

const createMotoRoutes = (motoController: MotoController): Router => {
  const router = Router();

  // Définir les routes en utilisant les méthodes du contrôleur
  // router.post('/', (req: Request, res: Response, next: NextFunction) => motoController.createMoto(req, res));
  // router.get('/', (req: Request, res: Response, next: NextFunction) => motoController.getAllMotos(req, res));
  router.get('/motos', (req, res) => motoController.getAllMotos(req, res));
  router.post('/motos', (req, res) => motoController.createMoto(req, res));


  return router; // Assurez-vous de retourner le router
};

export default createMotoRoutes;
