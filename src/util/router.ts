// Types
type Handler = (request: Request) => Promise<Response>;
type Condition = (request: Request) => boolean;

interface Route {
  conditions: Condition[];
  handler: Handler;
}

// Conditions
const MethodIs = (method: string): Condition => (req: Request): boolean => req.method.toLowerCase() === method.toLowerCase();
const PathIs = (regExp: string|RegExp): Condition => (req: Request): boolean => {
  const url = new URL(req.url);
  const path = url.pathname;
  return path.match(regExp) && path.match(regExp)[0] === path;
};

// Router
export default class Router {
  private routes: Route[];

  public constructor() {
    this.routes = [];
  }

  private handle(method: string, url: string, handler: Handler): this {
    this.routes.push({
      conditions: [MethodIs(method), PathIs(url)],
      handler,
    });
    return this;
  }

  public get(url: string, handler: Handler): this { return this.handle('get', url, handler); }

  public post(url: string, handler: Handler): this { return this.handle('post', url, handler); }

  public put(url: string, handler: Handler): this { return this.handle('put', url, handler); }

  public patch(url: string, handler: Handler): this { return this.handle('patch', url, handler); }

  public delete(url: string, handler: Handler): this { return this.handle('delete', url, handler); }

  // this route accepts any method
  public any(url: string, handler: Handler): this {
    this.routes.push({ conditions: [PathIs(url)], handler });
    return this;
  }

  // this is a 404 route
  public all(handler: Handler): this {
    this.routes.push({ conditions: [], handler });
    return this;
  }

  // resolve returns the matching route, if any
  private resolve(req: Request): Route {
    return this.routes.find((r: Route) => {
      if (!r.conditions.length) return true;

      return r.conditions.every((c: Condition) => c(req));
    });
  }

  public async route(req: Request): Promise<Response> {
    const route = this.resolve(req);
    if (route) return route.handler(req);

    return new Response('resource not found', {
      status: 404,
      statusText: 'not found',
      headers: {
        'content-type': 'text/plain',
      },
    });
  }
}
