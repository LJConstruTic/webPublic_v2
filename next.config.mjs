import createNextIntlPlugin from "next-intl/plugin";
import { resolve } from "path";

const withNextIntl = createNextIntlPlugin(resolve("./src/lib/locale/i18n.ts"));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["ljconstrutic.com", "esuntest.com"],
    },
};

export default withNextIntl(nextConfig);
