import { Service } from "@freshgum/typedi";
import { Context, Env } from "hono";
import { Get, Route } from "../../core/routing/decorators";
import { LogService } from "../log";

@Route("/")
@Service([LogService])
class HomeController {
	constructor(private logger: LogService) {}

	@Get("hello")
	index(c: Context<Env>) {
		this.logger.log("Hello Hono!");
		return c.text("Hello Hono!");
	}
}
