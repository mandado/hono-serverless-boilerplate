---
to: api/<%= name %>/controller.spec.ts
---

import { expect, test } from "vitest";
import { server } from "..";
import { createTestUrl } from "@infra/routing";

test("POST <%= route %>", async () => {
  const url = createTestUrl("<%= route %>");
	const res = await server.request(url, {
		method: "GET",
	});
	expect(res.status).toBe(200);
	expect(await res.text()).toEqual("Hello");
});
