import 'reflect-metadata';
import * as dotenv from 'dotenv';
dotenv.config(); // Charger les variables d'environnement

import { AppDataSource } from './data-source';
import app from './interface/server';

AppDataSource.initialize()
  .then(() => {
    console.log('Connexion à la base de données établie.');

    const motoRoutes = require('./interface/routes/motoRoutes').default;
    app.use('/api/motos', motoRoutes);


    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données :', error);
  });
