import { IGoal } from "@/domain/models/Goals";
import GoalGateway from "./goalGateway";
import HttpClient from "@/infra/http/httpClient";

export default class GoalGatewayHttp implements GoalGateway {
    constructor(readonly httpClient: HttpClient) {}
    createGoal(goal: IGoal): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateGoal(goal: IGoal): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteGoal(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async getGoals(): Promise<IGoal[]> {
        const response = (await this.httpClient.get("/Goals")) as { size: number; items: IGoal[] };
        return response.items;
    }
    getGoalById(id: string): Promise<IGoal> {
        throw new Error("Method not implemented.");
    }
}
