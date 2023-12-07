import { expect, test } from "vitest";
import { server } from "..";
import { createTestUrl } from "@infra/routing";

test("POST /hello", async () => {
  const url = createTestUrl("/hello");
	const res = await server.request(url, {
		method: "GET",
	});
	expect(res.status).toBe(200);
	expect(await res.text()).toEqual("Hello");
});
