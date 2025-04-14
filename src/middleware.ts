import createMiddleware from "next-intl/middleware";
import { languages } from "./lib/locale/constants/language";

export default createMiddleware({
    // A list of all locales that are supported
    locales: languages,
    // Used when no locale matches
    defaultLocale: "pt",
    localePrefix: "never",
});

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
