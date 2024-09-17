import { Event } from "../../domain/events/Event";

export interface EventStore {
    save(event: Event): Promise<void>;
    getEventsForAggregate(aggregateId: string): Promise<Event[]>;
}