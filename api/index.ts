import { handle } from "hono/aws-lambda";
import "reflect-metadata";
import { app } from "../infra";

// start of module imports
import "./hello/module";

// end of module imports

console.log(app.routes)

// no solution yet for package OpenAPIHono (Property '#private' is missing in type 'OpenAPIHono<Env, {}, "/">' but required in type 'Hono<Env, {}, "/">')
// @ts-expect-error
export const handler = handle(app);
export const server = app;
