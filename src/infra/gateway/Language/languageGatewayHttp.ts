import { Language } from "@/domain/models/Language";

export interface LanguageGateway {
    getLanguages(): Promise<Language[]>;
    getLanguageById(id: number): Promise<Language>;
    postLanguage(language: Omit<Language, "id" | "idx">): Promise<Language>;
}
