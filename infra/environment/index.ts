import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import { envBoolean } from "./helpers";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    APP_NAME: z.string(),
    HTTP_API_ID: z.string(),
    SECURITY_GROUP_IDS: z.string(),
    SUBNET_IDS: z.string(),
    DOCS: envBoolean({ optional: false, defaultValue: true }),
  },

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: "PUBLIC_",

  client: {},

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
