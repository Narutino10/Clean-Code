import express from 'express';
import cors from 'cors';
import { createMotoRoutes } from './routes/motoRoutes'; // Assurez-vous que ce chemin est correct
import { MotoController } from './controllers/MotoController';
import { TypeORMMotoRepository } from '../infrastructure/repositories/TypeORMMotoRepository';
import { TypeORMEntretienRepository } from '../infrastructure/repositories/TypeORMEntretienRepository';
import { ModeleMotoRepository } from '../application/repositories/ModeleMotoRepository';
import { TypeORMEventStore } from '../infrastructure/event-store/TypeORMEventStore';
import { AppDataSource } from '../data-source';

// Initialiser TypeORM (la connexion à la base de données)
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

const motoRepository = new TypeORMMotoRepository();
const entretienRepository = new TypeORMEntretienRepository();
const modeleMotoRepository = new ModeleMotoRepository(AppDataSource);
const eventStore = new TypeORMEventStore();
const motoController = new MotoController(
  motoRepository,
  modeleMotoRepository,
  entretienRepository,
  eventStore
);

// Créer les routes
const motoRoutes = createMotoRoutes(motoController, entretienRepository);

// Ajouter les routes au serveur
app.use('/api/motos', motoRoutes);

// Configurer le serveur pour écouter sur le port 3000
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});

export default app;