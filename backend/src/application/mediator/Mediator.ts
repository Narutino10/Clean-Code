export interface Mediator {
    send<T extends object>(request: T): Promise<any>;
    register<T>(requestType: new (...args: any[]) => T, handler: any): void;
  }
  