import { IService } from "@/domain/models/Service";
import api from "./apiClient";

export async function getServices(): Promise<IService[]> {
    const response = (await api.get("/ServiceType")).data as IService[];
    return response;
}

export async function postServiceType(serviceType: Omit<IService, "id" | "idx">): Promise<IService> {
    const response = await api.post("/ServiceType", serviceType);
    return response.data;
}

export async function getServiceById(id: string): Promise<IService> {
    const response = (await api.get(`/ServiceType/${id}`)).data;
    return response;
}

export async function updateService(id: string, serviceType: Omit<IService, "id" | "idx">): Promise<IService> {
    const response = await api.put(`/ServiceType/${id}`, serviceType);
    return response.data;
}
