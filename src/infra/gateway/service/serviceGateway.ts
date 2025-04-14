import { IService } from "@/domain/models/Service";

export default interface ServiceGateway {
    getServices(): Promise<IService[]>;
    postServiceType(serviceType: Omit<IService, "id" | "idx">): Promise<IService>;
    getServiceById(id: number): Promise<IService>;
}
