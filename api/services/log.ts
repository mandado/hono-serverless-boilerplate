import { Service } from "@infra/container";

export interface ILogService {
	log(message: string): string;
}

@Service([])
export class DeepLogService {
	public message() {
		return "TODO";
	}
}

@Service([DeepLogService])
export class LogService {
	constructor(private deepLogService: DeepLogService) {}

	public log(message: string) {
		return this.deepLogService.message() + message;
	}
}
