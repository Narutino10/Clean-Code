"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv.config(); // Charger les variables d'environnement
server_1.default.use((0, cors_1.default)()); // Activer CORS pour les requêtes HTTP
const data_source_1 = require("./data-source");
const server_1 = __importDefault(require("./interface/server"));
const TypeORMMotoRepository_1 = require("./infrastructure/repositories/TypeORMMotoRepository");
const ModeleMotoRepository_1 = require("./application/repositories/ModeleMotoRepository");
const TypeORMEntretienRepository_1 = require("./infrastructure/repositories/TypeORMEntretienRepository");
const TypeORMEventStore_1 = require("./infrastructure/event-store/TypeORMEventStore");
const MotoController_1 = require("./interface/controllers/MotoController");
const motoRoutes_1 = __importDefault(require("./interface/routes/motoRoutes"));
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Connexion à la base de données établie.');
    // Instancier les repositories
    const motoRepository = new TypeORMMotoRepository_1.TypeORMMotoRepository();
    const modeleMotoRepository = new ModeleMotoRepository_1.ModeleMotoRepository(data_source_1.AppDataSource);
    const entretienRepository = new TypeORMEntretienRepository_1.TypeORMEntretienRepository();
    const eventStore = new TypeORMEventStore_1.TypeORMEventStore();
    // Instancier le contrôleur avec les dépendances
    const motoController = new MotoController_1.MotoController(motoRepository, modeleMotoRepository, entretienRepository, eventStore // Ajout de eventStore comme argument
    );
    // Créer les routes avec les contrôleurs
    const motoRoutes = (0, motoRoutes_1.default)(motoController, entretienRepository);
    server_1.default.use('/api/motos', motoRoutes);
    const port = process.env.PORT || 3001;
    server_1.default.listen(port, () => {
        console.log(`Serveur démarré sur le port ${port}`);
    });
})
    .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
});
