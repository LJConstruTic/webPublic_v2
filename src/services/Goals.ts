import { IGoal } from "@/domain/models/Goals";
import api from "./apiClient";

export async function getGoals(): Promise<IGoal[]> {
    const response = (await api.get("/Metas")).data as IGoal[];
    return response;
}
