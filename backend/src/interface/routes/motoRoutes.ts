// import { Router } from 'express';
// import { MotoController } from '../controllers/MotoController';
// import { SimpleMediator } from '../../application/mediator/SimpleMediator';
// import { CreateMotoCommandHandler } from '../../application/handlers/CreateMotoCommandHandler';
// import { GetAllMotosQueryHandler } from '../../application/handlers/GetAllMotosQueryHandler';
// import { CreateMotoCommand } from '../../application/commands/CreateMotoCommand';
// import { GetAllMotosQuery } from '../../application/queries/GetAllMotosQuery';
// import { TypeORMMotoRepository } from '../../infrastructure/repositories/TypeORMMotoRepository';
// import { TypeORMEventStore } from '../../infrastructure/event-store/TypeORMEventStore';

// const router = Router();
// const eventStore = new TypeORMEventStore();
// // Création du repository
// const motoRepository = new TypeORMMotoRepository();

// // Création des handlers
// const createMotoCommandHandler = new CreateMotoCommandHandler(motoRepository, eventStore);
// const getAllMotosQueryHandler = new GetAllMotosQueryHandler(motoRepository);

// // Création du médiateur et enregistrement des handlers
// const mediator = new SimpleMediator();
// mediator.register(CreateMotoCommand, createMotoCommandHandler);
// mediator.register(GetAllMotosQuery, getAllMotosQueryHandler);

// // Instanciation du contrôleur avec le médiateur
// const motoController = new MotoController(mediator);

// // Définition des routes
// router.post('/', (req, res) => motoController.createMoto(req, res));
// router.get('/', (req, res) => motoController.getAllMotos(req, res));

// // Exportation du router
// export default router;





import { Router, Request, Response, NextFunction } from 'express';
import { MotoController } from '../controllers/MotoController';

const createMotoRoutes = (motoController: MotoController): Router => {
  const router = Router();

  // Définir les routes en utilisant les méthodes du contrôleur
  router.post('/', (req: Request, res: Response, next: NextFunction) => motoController.createMoto(req, res));
  router.get('/', (req: Request, res: Response, next: NextFunction) => motoController.getAllMotos(req, res));

  // Ajoutez d'autres routes si nécessaire

  return router; // Assurez-vous de retourner le router
};

export default createMotoRoutes;
