// src/application/handlers/CreateMotoCommandHandler.ts

import { CreateMotoCommand } from '../commands/CreateMotoCommand';
import { MotoRepository } from '../repositories/MotoRepository';
import { EventStore } from '../event-store/EventStore';
import { Moto } from '../../domain/entities/Moto';
import { v4 as uuidv4 } from 'uuid';

export class CreateMotoCommandHandler {
  constructor(
    private motoRepository: MotoRepository,
    private eventStore: EventStore
  ) {}

  async handle(command: CreateMotoCommand): Promise<void> {
    const moto = new Moto();
    moto.modele = command.modele;
    moto.kilometrage = command.kilometrage;
    moto.dateDernierEntretien = command.dateDernierEntretien;

    await this.motoRepository.save(moto);

    const event = {
      id: uuidv4(),
      aggregateId: moto.id,
      type: 'MotoCreated',
      data: {
        modele: moto.modele,
        kilometrage: moto.kilometrage,
        dateDernierEntretien: moto.dateDernierEntretien,
      },
      timestamp: new Date(),
    };

    // Sauvegarder l'événement
    await this.eventStore.save(event);
  }
}
