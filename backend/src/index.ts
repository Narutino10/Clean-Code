import 'reflect-metadata'; 
import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); // Charger les variables d'environnement
app.use(cors()); // Activer CORS pour les requêtes HTTP

import { AppDataSource } from './data-source';
import app from './interface/server';

import { TypeORMMotoRepository } from './infrastructure/repositories/TypeORMMotoRepository';
import { ModeleMotoRepository } from './application/repositories/ModeleMotoRepository';
import { TypeORMEntretienRepository } from './infrastructure/repositories/TypeORMEntretienRepository';
import { TypeORMEventStore } from './infrastructure/event-store/TypeORMEventStore';
import { MotoController } from './interface/controllers/MotoController';
import createMotoRoutes from './interface/routes/motoRoutes';

AppDataSource.initialize()
  .then(() => {
    console.log('Connexion à la base de données établie.');

    // Instancier les repositories
    const motoRepository = new TypeORMMotoRepository();
    const modeleMotoRepository = new ModeleMotoRepository(AppDataSource);
    const entretienRepository = new TypeORMEntretienRepository();
    const eventStore = new TypeORMEventStore();

    // Instancier le contrôleur avec les dépendances
    const motoController = new MotoController(
      motoRepository,
      modeleMotoRepository,
      entretienRepository,
      eventStore // Ajout de eventStore comme argument
    );

    // Créer les routes avec les contrôleurs
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
