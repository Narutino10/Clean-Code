import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config(); // Charger les variables d'environnement

import { AppDataSource } from './data-source';
import app from './interface/server';

import { TypeORMMotoRepository } from './infrastructure/repositories/TypeORMMotoRepository';
import { MotoController } from './interface/controllers/MotoController';
import { TypeORMEventStore } from './infrastructure/event-store/TypeORMEventStore';

import createMotoRoutes from './interface/routes/motoRoutes';
// Importez d'autres routes ici si nécessaire

AppDataSource.initialize()
  .then(() => {
    console.log('Connexion à la base de données établie.');

    // Instancier les repositories
    const motoRepository = new TypeORMMotoRepository();
    const eventStore = new TypeORMEventStore();

    // Instancier les contrôleurs avec les dépendances
    const motoController = new MotoController(motoRepository, eventStore);
    // Instancier d'autres contrôleurs si nécessaire

    // Créer les routes avec les contrôleurs
    const motoRoutes = createMotoRoutes(motoController);
    app.use('/api/motos', motoRoutes);

    // Importer et utiliser d'autres routes ici si nécessaire

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
  });
