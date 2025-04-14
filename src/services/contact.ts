import { IContact } from "@/domain/models/Contact";
import api from "./apiClient";

export async function sendEmailContact(data: Omit<IContact, "idx">): Promise<IContact> {
    const response = await api.post("/FormContacto/create", data);
    return response.data as IContact;
}
