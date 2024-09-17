import express from 'express';
import motoRoutes from './routes/motoRoutes'; // Importation sans accolades

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/motos', motoRoutes);

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

export default app;
