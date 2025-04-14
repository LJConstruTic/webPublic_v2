import { IComponent } from "@/domain/models/component";
import { ComponentGateway } from "./componentGateway";
import HttpClient from "@/infra/http/httpClient";

export class ComponentGatewayHttp implements ComponentGateway {
    constructor(private readonly httpClient: HttpClient) {}
    async getComponentByTag<Tag>(id: string): Promise<Tag> {
        const response = (await this.httpClient.get(`/Component/tags/${id}`)) as Tag;
        return response;
    }
    async getComponentByIdAndCodeLanguage<TComponent>(idComponent: string, code: number): Promise<TComponent> {
        const response = (await this.httpClient.get(`/Component/tags/Language`, {
            params: {
                idComponent,
                code,
            },
        })) as TComponent;
        return response;
    }
    async getComponents(): Promise<IComponent[]> {
        const response = (await this.httpClient.get("/Component")) as IComponent[];
        return response;
    }
    async getComponentById(id: string): Promise<IComponent> {
        const response = (await this.httpClient.get(`/Component/${id}`)) as IComponent;
        return response;
    }
    createComponent(component: Omit<IComponent, "id" | "idx">): Promise<IComponent> {
        throw new Error("Method not implemented.");
    }
    updateComponent(id: string, component: Omit<IComponent, "id" | "idx">): Promise<IComponent> {
        throw new Error("Method not implemented.");
    }
    deleteComponent(id: string): Promise<IComponent> {
        throw new Error("Method not implemented.");
    }
}
