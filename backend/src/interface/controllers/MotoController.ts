import { Request, Response } from 'express';
import { MotoRepository } from '../../application/repositories/MotoRepository';
import { ModeleMotoRepository } from '../../application/repositories/ModeleMotoRepository';
import { EntretienRepository } from '../../application/repositories/EntretienRepository';
import { EventStore } from '../../application/event-store/EventStore';
import { CreateMotoUseCase } from '../../application/use-cases/CreateMotoUseCase';
import { GetAllMotosUseCase } from '../../application/use-cases/GetAllMotosUseCase';
import { GetEntretiensByMotoIdUseCase } from '../../application/use-cases/GetEntretiensByMotoIdUseCase';
import { GetMotoByIdUseCase } from '../../application/use-cases/GetMotoByIdUseCase';
import { ConcessionRepository } from '../../application/repositories/ConcessionRepository';

export class MotoController {
    private createMotoUseCase: CreateMotoUseCase;
    private getAllMotosUseCase: GetAllMotosUseCase;
    private getEntretiensByMotoIdUseCase: GetEntretiensByMotoIdUseCase;
    private getMotoByIdUseCase: GetMotoByIdUseCase;

    constructor(
        private readonly motoRepository: MotoRepository,
        private readonly modeleMotoRepository: ModeleMotoRepository,
        private readonly entretienRepository: EntretienRepository,
        private readonly eventStore: EventStore,
        private readonly concessionRepository: ConcessionRepository // Correction ajout du repository
    ) {
        this.createMotoUseCase = new CreateMotoUseCase(
            this.motoRepository, 
            this.modeleMotoRepository,
            this.concessionRepository  // Correction ajout de l'argument manquant
        );
        this.getAllMotosUseCase = new GetAllMotosUseCase(this.motoRepository);
        this.getEntretiensByMotoIdUseCase = new GetEntretiensByMotoIdUseCase(this.entretienRepository);
        this.getMotoByIdUseCase = new GetMotoByIdUseCase(this.motoRepository);
    }

    public async createMoto(req: Request, res: Response): Promise<void> {
        try {
            const data = req.body;
            const newMoto = await this.createMotoUseCase.execute(data);
            res.status(201).json(newMoto);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    public async getAllMotos(req: Request, res: Response): Promise<void> {
        try {
            const motos = await this.motoRepository.find({ relations: ['modele', 'concession'] });
            res.status(200).json(motos);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    

    public async getEntretiensByMotoId(req: Request, res: Response): Promise<void> {
        try {
            const motoId = req.params.motoId;
            const entretiens = await this.getEntretiensByMotoIdUseCase.execute(motoId);
            res.status(200).json(entretiens);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    public async getMotoById(req: Request, res: Response): Promise<void> {
        try {
            const motoId = req.params.id;
            const moto = await this.getMotoByIdUseCase.execute(motoId);
            res.status(200).json(moto);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
