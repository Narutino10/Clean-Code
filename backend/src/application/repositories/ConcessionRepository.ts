import { Concession } from '../../domain/entities/Concession';

export interface ConcessionRepository {
    findById(id: string): Promise<Concession | null>;
    findAll(): Promise<Concession[]>;
    createConcession(concessionData: Partial<Concession>): Promise<Concession>;
    updateConcession(id: string, concessionData: Partial<Concession>): Promise<Concession | null>;
    deleteConcession(id: string): Promise<void>;
}
