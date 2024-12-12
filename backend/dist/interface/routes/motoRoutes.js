"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMotoRoutes = void 0;
const express_1 = require("express");
const PlanifierEntretienController_1 = require("../controllers/PlanifierEntretienController");
const createMotoRoutes = (motoController, entretienRepository) => {
    const router = (0, express_1.Router)();
    router.get('/motos', (req, res) => motoController.getAllMotos(req, res));
    router.post('/motos', (req, res) => motoController.createMoto(req, res));
    router.get('/motos/:id', (req, res) => motoController.getMotoById(req, res));
    router.post('/motos/:motoId/planifier', (req, res) => {
        const planifierController = new PlanifierEntretienController_1.PlanifierEntretienController();
        planifierController.planifier(req, res);
    });
    return router;
};
exports.createMotoRoutes = createMotoRoutes;
exports.default = exports.createMotoRoutes;
