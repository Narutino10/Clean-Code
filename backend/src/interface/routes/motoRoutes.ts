import { Router } from 'express';
import { MotoController } from '../controllers/MotoController';
import { TypeORMMotoRepository } from '../../application/repositories/TypeORMMotoRepository';
import { CreateMotoUseCase } from '../../application/use-cases/CreateMotoUseCase';
import { GetAllMotosUseCase } from '../../application/use-cases/GetAllMotosUseCase';

const motoRepository = new TypeORMMotoRepository();
const createMotoUseCase = new CreateMotoUseCase(motoRepository);
const getAllMotosUseCase = new GetAllMotosUseCase(motoRepository);
const motoController = new MotoController(createMotoUseCase, getAllMotosUseCase);

const router = Router(); 

router.post('/', (req, res) => motoController.createMoto(req, res));
router.get('/', (req, res) => motoController.getAllMotos(req, res));

export default router;