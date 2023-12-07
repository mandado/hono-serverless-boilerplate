import { zValidator } from "@hono/zod-validator";
import { Env, Handler, ValidationTargets } from "hono";
import { H } from "hono/types";
import { z } from "zod";
import { MethodOptions } from "./decorators";

type MiddlewareHandler = H<Env, string, {}, any>;

export type ValidationOptions = {
	[key in keyof ValidationTargets]?: z.ZodType<any, z.ZodTypeDef, any>;
};

const existsOptions = (
	options: MethodOptions["validate"],
): options is ValidationOptions => {
	return options !== undefined;
};

export function validatorMiddleware(
	optionsConfig: ValidationOptions | undefined,
	parentHandler: Handler<Env, string, {}, any>,
) {
	const handler: MiddlewareHandler = async (c, next) => {
		let response = await next();

		if (existsOptions(optionsConfig)) {
			const options = Object.entries(optionsConfig) as [
				keyof ValidationTargets,
				z.ZodType<any, z.ZodTypeDef, any>,
			][];

			for await (const [key, schema] of options) {
				return await zValidator(key, schema, (result, c) => {
					if (!result.success) {
						return c.json({
							errors: result.error.flatten().fieldErrors,
						});
					}

					return parentHandler(c, next);
				})(c, next);
			}
		}

		return response;
	};

	return handler;
}
