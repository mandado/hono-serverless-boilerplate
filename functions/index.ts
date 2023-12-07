import { LambdaEvent } from "hono/aws-lambda";

export async function handler(event: LambdaEvent) {
	return {
		message: "Go Serverless v3! Your function executed successfully!",
		input: event,
	};
}
