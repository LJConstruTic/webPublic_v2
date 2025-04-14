import { IContact } from "@/domain/models/Contact";
import ContactGateway from "./contactGateway";
import HttpClient from "@/infra/http/httpClient";

export default class ContactGatewayHttpClient implements ContactGateway {
    constructor(private httpClient: HttpClient) {}
    async postContact(contact: Omit<IContact, "idx">): Promise<IContact> {
        const response = await this.httpClient.post("/Contact", contact);
        return response as IContact;
    }
    getContactById(id: string): Promise<IContact> {
        throw new Error("Method not implemented.");
    }
}
