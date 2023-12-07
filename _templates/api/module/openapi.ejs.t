---
to: api/<%= name %>/openapi.ts
---
import { createRoute, z } from "@infra/zod";

export const <%= name %>OpenApi = createRoute({
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: "Retrieve the user",
    },
  },
});
