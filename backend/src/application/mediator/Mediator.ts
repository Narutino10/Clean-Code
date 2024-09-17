export interface Mediator {
    send<T>(request: T): Promise<any>;
  }
  