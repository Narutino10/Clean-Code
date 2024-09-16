import 'reflect-metadata';
import { createConnection } from 'typeorm';
import app from './interface/server';

createConnection()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });
  })
  .catch((error) => console.log('Erreur lors de la connexion à la base de données :', error));
