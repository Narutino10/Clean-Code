import express from 'express';
import { createMotoRoutes } from './routes/motoRoutes'; // Assurez-vous que ce chemin est correct
import { MotoController } from './controllers/MotoController';
import { TypeORMMotoRepository } from '../infrastructure/repositories/TypeORMMotoRepository';
import { TypeORMEntretienRepository } from '../infrastructure/repositories/TypeORMEntretienRepository';
import { ModeleMotoRepository } from '../application/repositories/ModeleMotoRepository';
import { TypeORMEventStore } from '../infrastructure/event-store/TypeORMEventStore';
import { AppDataSource } from '../data-source';

// Instancier les dépendances nécessaires
const app = express();
const motoRepository = new TypeORMMotoRepository();
const entretienRepository = new TypeORMEntretienRepository();
const modeleMotoRepository = new ModeleMotoRepository(AppDataSource); 
const eventStore = new TypeORMEventStore; 
const motoController = new MotoController(
  motoRepository,
  modeleMotoRepository, 
  entretienRepository,
  eventStore 
);

// Créer les routes
const motoRoutes = createMotoRoutes(motoController, entretienRepository);

app.use('/api/motos', motoRoutes);

export default app;
