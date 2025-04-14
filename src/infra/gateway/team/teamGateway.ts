import { ITeam } from "@/domain/models/Team";

export interface TeamGateway {
    getTeam(): Promise<{ size: number; items: ITeam[] }>;
}
