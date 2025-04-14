"use client";
import { getCookie } from "cookies-next";
import { Container } from "../ContainerRoot";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { ComponentGatewayHttp } from "@/infra/gateway/component/componentGatewayHttp";
import { Component } from "@/domain/models/component";
import { useEffect, useState } from "react";
import { HEADER_ID } from "@/lib/data";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export const Footer = () => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const [targetId, setTargetId] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const httpClient = new AxiosAdapter();
    const componentGateway = new ComponentGatewayHttp(httpClient);
    const [componentHeader, setComponentHeader] = useState<Component>();
    const t = useTranslations("Footer");
    const message = t("copyright", { year: new Date().getFullYear() });

    async function getComponentHeader() {
        try {
            const response = (await componentGateway.getComponentByTag(HEADER_ID)) as Component;
            setComponentHeader(response);
        } catch (error) {
            console.error(error);
        }
    }
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        if (pathname === "/") {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 200);
            }
        } else {
            setTargetId(targetId);
            router.push("/#" + targetId);
        }
    };

    useEffect(() => {
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }, 200);
                setTargetId(null);
            }
        }
    }, [targetId]);

    useEffect(function () {
        getComponentHeader();
    }, []);

    return (
        <footer className="w-full py-10 bg-black">
            <Container>
                <div className="w-full flex flex-col py-6 gap-6">
                    <h1 className="font-bold text-2xl text-left">
                        <span className="text-primary-blue">LJ</span>
                        <span className="text-white">ConstruTic</span>
                    </h1>
                    <div className="flex flex-col md:flex-col justify-between gap-10">
                        <ul className="flex flex-col gap-2  text-sm">
                            {componentHeader?.items.map((item, idx: number) => {
                                if (idx > 3) return null;
                                return (
                                    <a href={`/#${item.tagId}`} key={item.tagId} onClick={(e) => handleClick(e, item.tagId)}>
                                        <li className="cursor-pointer text-white">{item?.tag[lang_current]!}</li>
                                    </a>
                                );
                            })}
                        </ul>

                        <div className="text-sm flex flex-col md:flex-row gap-10 text-slate-50">
                            <p>
                                Luís José - Construção e Soluções Tecnológicas LDA, <br />
                                Santa Cruz - Vila, Lobito, Benguela
                            </p>
                            <div className="space-y-1">
                                <span className="block">+244 933 477 555</span>
                                <span className="block">info@ljconstrutic.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="w-full border-t border-gray-300 text-white dark:border-gray-700 py-4 text-center">
                    <span className="text-sm" dangerouslySetInnerHTML={{ __html: message }} />
                </div>
            </Container>
        </footer>
    );
};
