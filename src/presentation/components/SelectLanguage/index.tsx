"use client";
import * as React from "react";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/presentation/components/ui/select";
import { usePathname } from "@/lib/locale/navigation";
import { useRouter } from "@/lib/locale/navigation";
import { getCookie } from "cookies-next";
import { Language } from "@/domain/models/Language";

type props = {
    languages: Language | any;
};

export function ToogleLanguage({ languages }: props) {
    const pathname = usePathname();
    const router = useRouter();
    const lang_current = getCookie("NEXT_LOCALE");

    function toogleLanguage(locale: string) {
        router.replace(pathname, { locale: locale });
    }
    return (
        <Select onValueChange={(locale) => toogleLanguage(locale)} defaultValue={lang_current ?? "pt"}>
            <SelectTrigger className="md:w-[120px] w-[8rem] sm:w-[100px]">
                <SelectValue placeholder={lang_current} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {languages?.map((lang: Language, idx: number) => {
                        if (languages.length - 1 === idx) return null;
                        return (
                            <SelectItem key={lang.id} value={lang.tag} disabled={lang.tag === lang_current}>
                                {lang.tagRegion}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
