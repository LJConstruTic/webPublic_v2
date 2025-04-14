import { type ClassValue, clsx } from "clsx";
import { NextApiRequest, NextApiResponse } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const LANGUAGES = [
    {
        code: 1,
        tagRegion: "Português",
        codeISO: "pt",
    },
    {
        code: 2,
        tagRegion: "Unbumdo",
        codeISO: "umb",
    },
    {
        code: 3,
        tagRegion: "Español",
        codeISO: "es",
    },
    {
        code: 4,
        tagRegion: "Inglish",
        codeISO: "en",
    },
    {
        code: 5,
        tagRegion: "Fransçais",
        codeISO: "fr",
    },
];

export function getLanguageTag(tag: string) {
    const language = LANGUAGES.find((lang) => lang.tagRegion === tag);
    return language?.tagRegion;
}

export function escapeHtml(string: string) {
    const entityMap: { [key: string]: string } = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
    };
    return String(string).replace(/[&<>"'`=\/]/g, (s) => entityMap[s]);
}
