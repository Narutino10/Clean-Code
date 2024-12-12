import 'reflect-metadata'; 
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // Charger les variables d'environnement

import { AppDataSource } from './data-source';
import app from './interface/server';

import { TypeORMMotoRepository } from './infrastructure/repositories/TypeORMMotoRepository';
import { ModeleMotoRepository } from './application/repositories/ModeleMotoRepository';
import { TypeORMEntretienRepository } from './infrastructure/repositories/TypeORMEntretienRepository';
import { TypeORMEventStore } from './infrastructure/event-store/TypeORMEventStore';
import { MotoController } from './interface/controllers/MotoController';
import createMotoRoutes from './interface/routes/motoRoutes';

app.use(cors()); // Activer CORS pour les requêtes HTTP

AppDataSource.initialize()
  .then(() => {
    console.log('Connexion à la base de données établie.');

    const motoRepository = new TypeORMMotoRepository();
    const modeleMotoRepository = new ModeleMotoRepository(AppDataSource);
    const entretienRepository = new TypeORMEntretienRepository();
    const eventStore = new TypeORMEventStore();

    const motoController = new MotoController(
      motoRepository,
      modeleMotoRepository,
      entretienRepository,
      eventStore
    );

    const motoRoutes = createMotoRoutes(motoController, entretienRepository);
    app.use('/api/motos', motoRoutes);

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
  });
