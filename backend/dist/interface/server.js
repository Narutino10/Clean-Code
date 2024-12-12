"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const motoRoutes_1 = require("./routes/motoRoutes"); // Assurez-vous que ce chemin est correct
const MotoController_1 = require("./controllers/MotoController");
const TypeORMMotoRepository_1 = require("../infrastructure/repositories/TypeORMMotoRepository");
const TypeORMEntretienRepository_1 = require("../infrastructure/repositories/TypeORMEntretienRepository");
const ModeleMotoRepository_1 = require("../application/repositories/ModeleMotoRepository");
const TypeORMEventStore_1 = require("../infrastructure/event-store/TypeORMEventStore");
const data_source_1 = require("../data-source");
// Instancier les dépendances nécessaires
const app = (0, express_1.default)();
const motoRepository = new TypeORMMotoRepository_1.TypeORMMotoRepository();
const entretienRepository = new TypeORMEntretienRepository_1.TypeORMEntretienRepository();
const modeleMotoRepository = new ModeleMotoRepository_1.ModeleMotoRepository(data_source_1.AppDataSource);
const eventStore = new TypeORMEventStore_1.TypeORMEventStore;
const motoController = new MotoController_1.MotoController(motoRepository, modeleMotoRepository, entretienRepository, eventStore);
// Créer les routes
const motoRoutes = (0, motoRoutes_1.createMotoRoutes)(motoController, entretienRepository);
app.use('/api/motos', motoRoutes);
exports.default = app;
