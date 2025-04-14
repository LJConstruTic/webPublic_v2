import HttpClient from "@/infra/http/httpClient";
import ServiceGateway from "./serviceGateway";
import { IService } from "@/domain/models/Service";

export default class ServiceGatewayHttp implements ServiceGateway {
    constructor(readonly httpClient: HttpClient) {}
    async getServiceById(id: number): Promise<any> {
        const response = await this.httpClient.get(`/Service/${id}`);
        return response;
    }
    async getServices(): Promise<IService[]> {
        const response = (await this.httpClient.get("/Service")) as { size: number; items: IService[] };
        return response?.items;
    }

    postServiceType(serviceType: Omit<IService, "id" | "idx">): Promise<IService> {
        throw new Error("Method not implemented.");
    }
}
