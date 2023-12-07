import { Container, Token } from "@infra/container";

export const routerContainer = Container.ofChild(Symbol("routers"));
export const pathsContainer = Container.ofChild(Symbol("routers:path"));

export const ROUTE_PREFIXES = new Token("ROUTE_PREFIXES");
export const ROUTE_PATHS = new Token("ROUTE_PATHS");
