import { Router } from 'express';
import { MotoController } from '../controllers/MotoController';

const router = Router();
const motoController = new MotoController(
  // injecter les cas d'utilisation nécessaires
);

router.post('/planifier-entretiens', (req, res) => motoController.planifierEntretiens(req, res));

export default router;
