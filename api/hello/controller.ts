import { Service } from "@freshgum/typedi";
import { Post, Route } from "@infra/routing";
import { Context } from "hono";
import { helloOpenApi } from "./openapi";

@Route("/hello")
@Service([])
export class HelloController {
  constructor() { }

  @Post("/", {
    openapi: helloOpenApi,
  })
  index(c: Context) {
    return c.json({
      message1: "Hello, world!",
    }, 200);
  }
}

