import HttpClient from "@/infra/http/httpClient";
import { TeamGateway } from "./teamGateway";
import { ITeam } from "@/domain/models/Team";

export class TeamGatewayHttp implements TeamGateway {
    constructor(private http: HttpClient) {}

    async getTeam(): Promise<{ size: number; items: ITeam[] }> {
        const response = await this.http.get<{ size: number; items: ITeam[] }>("/Team");
        return response;
    }
}
