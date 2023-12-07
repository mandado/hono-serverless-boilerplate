import { OpenAPIHono } from "@hono/zod-openapi";

export * from "@hono/zod-openapi";

export type RouteConfig = Omit<Parameters<OpenAPIHono["openapi"]>[0], 'method'>
export type OpenApiOptions = Omit<RouteConfig, 'path'>;
export type RoutingPath<P extends string> = P extends `${infer Head}/{${infer Param}}${infer Tail}`
  ? `${Head}/:${Param}${RoutingPath<Tail>}`
  : P

export const createRoute = <P extends string, R extends RouteConfig>(
  routeConfig: Omit<R, 'path'> & { path?: P | undefined },
) => {
  return {
    ...routeConfig,
    getRoutingPath(): RoutingPath<RouteConfig['path']> {
      return routeConfig?.path?.replaceAll(/\/{(.+?)}/g, '/:$1') as RoutingPath<P>
    },
  }
}

