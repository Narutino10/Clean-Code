import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config(); // Charger les variables d'environnement

import { AppDataSource } from './data-source';
import app from './interface/server';

import { TypeORMMotoRepository } from './infrastructure/repositories/TypeORMMotoRepository';
import { ModeleMotoRepository } from './application/repositories/ModeleMotoRepository'; // Assurez-vous que le chemin est correct
import { MotoController } from './interface/controllers/MotoController';
import { TypeORMEventStore } from './infrastructure/event-store/TypeORMEventStore';

import createMotoRoutes from './interface/routes/motoRoutes';

AppDataSource.initialize()
  .then(() => {
    console.log('Connexion à la base de données établie.');

    // Instancier les repositories
    const motoRepository = new TypeORMMotoRepository();
    const modeleMotoRepository = new ModeleMotoRepository(AppDataSource); // Passer l'AppDataSource ici
    const eventStore = new TypeORMEventStore();

    // Instancier les contrôleurs avec les dépendances
    const motoController = new MotoController(motoRepository, modeleMotoRepository, eventStore);

    // Créer les routes avec les contrôleurs
    const motoRoutes = createMotoRoutes(motoController);
    app.use('/api/motos', motoRoutes);

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
  });
