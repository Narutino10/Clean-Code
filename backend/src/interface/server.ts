import express from 'express';
import cors from 'cors';
import { createMotoRoutes } from './routes/motoRoutes';
import createModeleMotoRoutes from './routes/modeleMotoRoutes'; 
import { MotoController } from './controllers/MotoController';
import { TypeORMMotoRepository } from '../infrastructure/repositories/TypeORMMotoRepository';
import { TypeORMEntretienRepository } from '../infrastructure/repositories/TypeORMEntretienRepository';
import { ModeleMotoRepository } from '../application/repositories/ModeleMotoRepository';
import { TypeORMEventStore } from '../infrastructure/event-store/TypeORMEventStore';
import { AppDataSource } from '../data-source';
import pieceRoutes from './routes/pieceRoutes';
import entretienRoutes from './routes/entretienRoutes';
import { TypeORMConcessionRepository } from '../infrastructure/repositories/TypeORMConcessionRepository';

// Initialiser TypeORM (connexion à la base de données)
AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

// Instancier les dépendances nécessaires
const app = express();
app.use(cors()); // Activer CORS pour les requêtes HTTP
app.use(express.json()); // Middleware pour parser le JSON des requêtes
app.use(entretienRoutes);


const motoRepository = new TypeORMMotoRepository();
const entretienRepository = new TypeORMEntretienRepository();
const modeleMotoRepository = new ModeleMotoRepository(AppDataSource);
const eventStore = new TypeORMEventStore();
const concessionRepository = new TypeORMConcessionRepository();

const motoController = new MotoController(
  motoRepository,
  modeleMotoRepository,
  entretienRepository,
  eventStore,
  concessionRepository
);

// Créer les routes
const motoRoutes = createMotoRoutes(motoController, entretienRepository);
const modeleMotoRoutes = createModeleMotoRoutes(modeleMotoRepository); // Ajout de la route des modèles

// Ajouter les routes au serveur
app.use('/api/motos', motoRoutes);
app.use('/api/modeles', modeleMotoRoutes); 
app.use('/api/pieces', pieceRoutes);
app.use('/api/entretiens', entretienRoutes);


// Configurer le serveur pour écouter sur le port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

export default app;
