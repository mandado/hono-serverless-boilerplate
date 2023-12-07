import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { env } from "..";

const app = new OpenAPIHono();

if (env.DOCS) {
  app.get(
    "/ui",
    swaggerUI({
      url: "/doc",
    }),
  );

  app.doc("/doc", {
    info: {
      title: "An API",
      version: "v1",
    },
    openapi: "3.1.0",
  });
}

export default app;
