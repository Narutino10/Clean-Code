import { GetAllMotosQuery } from '../queries/GetAllMotosQuery';
import { MotoRepository } from '../repositories/MotoRepository';
import { Moto } from '../../domain/entities/Moto';

export class GetAllMotosQueryHandler {
  constructor(private motoRepository: MotoRepository) {}

  async handle(query: GetAllMotosQuery): Promise<Moto[]> {
    return await this.motoRepository.findAll();
  }
}