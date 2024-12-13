import { Router } from 'express';
import { ModeleMotoRepository } from '../../application/repositories/ModeleMotoRepository';

const createModeleMotoRoutes = (modeleMotoRepository: ModeleMotoRepository): Router => {
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      const modeles = await modeleMotoRepository.findAll();
      res.status(200).json(modeles);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ error: errorMessage });
    }
  });;

  return router;
};

export default createModeleMotoRoutes;
