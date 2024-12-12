"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MotoController_1 = require("../controllers/MotoController");
const PlanifierEntretienController_1 = require("../controllers/PlanifierEntretienController");
const motoController = new MotoController_1.MotoController(); // Fournissez les dépendances nécessaires ici
const planifierEntretienController = new PlanifierEntretienController_1.PlanifierEntretienController();
const createMotoRoutes = () => {
    const router = (0, express_1.Router)();
    router.get('/motos', (req, res) => motoController.getAllMotos(req, res));
    router.post('/motos', (req, res) => motoController.createMoto(req, res));
    router.get('/motos/:id', (req, res) => motoController.getMotoById(req, res));
    router.post('/motos/:motoId/planifier', (req, res) => planifierEntretienController.planifier(req, res));
    return router;
};
exports.default = createMotoRoutes;
