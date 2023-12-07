## HONO serverless Boilerplate

Simple hono boilerplate to develop serverless applications on AWS.

### Installing project

`pnpm install`

### Testing offline api

`pnpm offline`

#### Generating code

`pnpm g:module --name hello --route /hello`

#### Features

- Routing register using decorators on controller top on (https://hono.dev/)[https://hono.dev/]
- Openapi routes [@hono/zod-openapi](https://github.com/honojs/middleware/tree/main/packages/zod-openapi) with routing.
- Dependency injection using [@freshgum/typedi](https://github.com/freshgum-bubbles/typedi)
- Formatting and linting code using [BiomeJS](https://biomejs.dev/)
- Generating code using [hygen.io](https://www.hygen.io)
- Enviroment type safe variables using [env.t3.gg](https://env.t3.gg/)
- Testing using [https://vitest.dev/](Vitest)
- Build serverless application using [https://github.com/floydspace/serverless-esbuild](serverless-esbuild)
- Emulates AWS λ and API Gateway using [https://github.com/dherault/serverless-offline](Serverless offline)

#### Examples

##### Open api Schema

```ts
import { createRoute, z } from "@infra/zod";

export const helloOpenApi = createRoute({
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            name: z.string().openapi("name"),
          }),
        },
      },
    },
  },
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
```

##### Routing

```ts
@Route("/hello")
@Service([])
export class HelloController {
  constructor() {}

  @Post("/", {
    openapi: helloOpenApi,
  })
  index(c: Context) {
    return c.json(
      {
        message1: "Hello, world!",
      },
      200
    );
  }
}
```

##### Dependency injection

```ts
import { Service } from "@infra/container";

@Service([])
class LogService {
  log(message: string) {
    console.log(message);
  }
}

@Service([LogService])
class RootService {
  constructor(private logger: LogService) {}
  run() {
    this.logger.log("hello world!");
  }
}
```

### Troubleshooting

- [https://github.com/honojs/middleware/issues/181](Issue) - result doesn't fit with the result type, so you can put anything on result and won't be validated by zod for now
  - Opened PR: https://github.com/honojs/middleware/pull/184/files
