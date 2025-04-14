import { Language } from "@/domain/models/Language";
import { LanguageGateway } from "./languageGatewayHttp";
import HttpClient from "@/infra/http/httpClient";

export class LanguageGatewayHttp implements LanguageGateway {
    constructor(private http: HttpClient) {}
    async getLanguages(): Promise<Language[]> {
        const response = (await this.http.get("/Language")) as { size: number; items: Language[] };
        return response.items;
    }
    async getLanguageById(id: number): Promise<Language> {
        const response = (await this.http.get(`/Language/${id}`)) as Language;
        return response;
    }
    postLanguage(language: Omit<Language, "id" | "idx">): Promise<Language> {
        throw new Error("Method not implemented.");
    }
}
