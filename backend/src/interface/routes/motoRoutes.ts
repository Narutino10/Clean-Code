import { Router } from 'express';
import { MotoController } from '../controllers/MotoController';
import { PlanifierEntretienController } from '../controllers/PlanifierEntretienController';

const motoController = new MotoController(); // Fournissez les dépendances nécessaires ici
const planifierEntretienController = new PlanifierEntretienController();

const createMotoRoutes = (): Router => {
    const router = Router();

    router.get('/motos', (req, res) => motoController.getAllMotos(req, res));
    router.post('/motos', (req, res) => motoController.createMoto(req, res));
    router.get('/motos/:id', (req, res) => motoController.getMotoById(req, res));
    router.post('/motos/:motoId/planifier', (req, res) => planifierEntretienController.planifier(req, res));

    return router;
};

export default createMotoRoutes;
