import { Moto } from '../../domain/entities/Moto';
import { MotoRepository } from '../repositories/MotoRepository';
import { GetAllMotosQuery } from '../queries/GetAllMotosQuery';


export class GetAllMotosQueryHandler {
  constructor(private motoRepository: MotoRepository) {}

  async handle(query: GetAllMotosQuery): Promise<Moto[]> {
    const motos = await this.motoRepository.findAll();
    return motos;
  }
}
