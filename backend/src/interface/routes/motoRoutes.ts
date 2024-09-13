import { Router } from "express";
import { MotoController } from "../controllers/MotoController";

const router = Router();
const motoController = new MotoController();

router.post("/planifier-entretien", (req, res) => motoController.planifierEntretien(req, res));

export default router;
