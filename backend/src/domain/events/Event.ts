export interface Event {
    id: string;
    aggregateId: string;
    type: string;
    data: any;
    timestamp: Date;
}