"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const motoRoutes_1 = require("./routes/motoRoutes"); // Assurez-vous que ce chemin est correct
const MotoController_1 = require("./controllers/MotoController");
const TypeORMMotoRepository_1 = require("../infrastructure/repositories/TypeORMMotoRepository");
const TypeORMEntretienRepository_1 = require("../infrastructure/repositories/TypeORMEntretienRepository");
const ModeleMotoRepository_1 = require("../application/repositories/ModeleMotoRepository");
const TypeORMEventStore_1 = require("../infrastructure/event-store/TypeORMEventStore");
const data_source_1 = require("../data-source");
// Initialiser TypeORM (la connexion à la base de données)
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database connection established');
})
    .catch((error) => {
    console.error('Database connection failed:', error);
});
// Instancier les dépendances nécessaires
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Activer CORS pour les requêtes HTTP
app.use(express_1.default.json()); // Middleware pour parser le JSON des requêtes
const motoRepository = new TypeORMMotoRepository_1.TypeORMMotoRepository();
const entretienRepository = new TypeORMEntretienRepository_1.TypeORMEntretienRepository();
const modeleMotoRepository = new ModeleMotoRepository_1.ModeleMotoRepository(data_source_1.AppDataSource);
const eventStore = new TypeORMEventStore_1.TypeORMEventStore();
const motoController = new MotoController_1.MotoController(motoRepository, modeleMotoRepository, entretienRepository, eventStore);
// Créer les routes
const motoRoutes = (0, motoRoutes_1.createMotoRoutes)(motoController, entretienRepository);
// Ajouter les routes au serveur
app.use('/api/motos', motoRoutes);
// Configurer le serveur pour écouter sur le port 3000
app.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
exports.default = app;
