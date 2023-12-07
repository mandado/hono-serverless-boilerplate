import { Container, Service } from "@freshgum/typedi";
import { describe, expect, test } from "vitest";
import { DeepLogService, LogService } from "./log";

@Service([])
class MockedDeepLogService2 {
	message() {
		return "mocked213";
	}
}

@Service([MockedDeepLogService2])
class MockedDeepLogService {
	constructor(private deepLogService: MockedDeepLogService2) {}

	message() {
		return "mocked213" + this.deepLogService.message();
	}
}

describe("LogService", () => {
	Container.set({
		id: DeepLogService,
		value: Container.get(MockedDeepLogService),
	});

	const logService = Container.get(LogService);

	test("testing mocked service", async () => {
		expect(logService.log("blah")).toBe("mocked213mocked213blah");
	});
});
