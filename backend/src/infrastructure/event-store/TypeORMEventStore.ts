import { EventStore } from '../../application/event-store/EventStore';
import { Event } from '../../domain/events/Event';
import { Repository } from 'typeorm';
import { EventEntity } from '../entities/EventEntity';
import { AppDataSource } from '../../data-source';

export class TypeORMEventStore implements EventStore {
  private eventRepository: Repository<EventEntity>;

  constructor() {
    this.eventRepository = AppDataSource.getRepository(EventEntity);
  }

  async save(event: Event): Promise<void> {
    const eventEntity = this.eventRepository.create(event);
    await this.eventRepository.save(eventEntity);
  }

  async getEventsForAggregate(aggregateId: string): Promise<Event[]> {
    const events = await this.eventRepository.find({ where: { aggregateId } });
    return events;
  }
}
