import { IGoal } from "@/domain/models/Goals";

export default interface GoalGateway {
    createGoal(goal: IGoal): Promise<void>;
    updateGoal(goal: IGoal): Promise<void>;
    deleteGoal(id: string): Promise<void>;
    getGoals(): Promise<IGoal[]>;
    getGoalById(id: string): Promise<IGoal>;
}
