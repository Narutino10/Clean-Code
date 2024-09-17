export class SimpleMediator implements Mediator {
    private handlers = new Map();
  
    register<T>(requestType: new (...args: any[]) => T, handler: any) {
      this.handlers.set(requestType, handler);
    }
  
    async send<T>(request: T): Promise<any> {
      const handler = this.handlers.get(request.constructor);
      if (!handler) {
        throw new Error('Handler not found for request');
      }
      return await handler.handle(request);
    }
  }
  