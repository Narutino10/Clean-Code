import express from 'express';
import { EntretienController } from '../controllers/EntretienController';

const router = express.Router();
const entretienController = new EntretienController();

// Route pour récupérer tous les entretiens
router.get('/api/entretiens', (req, res) => entretienController.getAllEntretiens(req, res));

// Route pour ajouter un entretien
router.post('/api/entretiens', (req, res) => entretienController.createEntretien(req, res));

router.get('/motos/:motoId/entretiens', (req, res) => entretienController.getEntretiensByMoto(req, res));



export default router;
