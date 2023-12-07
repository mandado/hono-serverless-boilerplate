---
to: api/<%= name %>/controller.ts
---

import { Service } from "@freshgum/typedi";
import { Get, Route } from "@infra/routing";
import { Context } from "hono";
import { helloOpenApi } from "./openapi";

@Route("/hello")
@Service([])
export class HelloController {
  constructor() { }

  @Get("/", {
    openapi: helloOpenApi,
  })
  index(c: Context) {
    return c.json({
      message: "Hello, world!",
    });
  }
}

