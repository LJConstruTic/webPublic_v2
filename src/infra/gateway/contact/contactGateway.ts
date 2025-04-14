import { IContact } from "@/domain/models/Contact";

export default interface ContactGateway {
    postContact(contact: Omit<IContact, "idx">): Promise<IContact>;
    getContactById(id: string): Promise<IContact>;
}
