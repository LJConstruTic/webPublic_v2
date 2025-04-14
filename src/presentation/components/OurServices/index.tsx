"use client";

import { Container } from "../ContainerRoot";
import React from "react";
import { IService } from "@/domain/models/Service";
import { getCookie } from "cookies-next";
import { MENU_ID_LIST } from "@/lib/data";
import { useTranslations } from "next-intl";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Button } from "../ui/button";

type props = {
    servicesType: IService[];
    isLoading?: boolean;
};

export const OurServices: React.FC<props> = ({ servicesType }) => {
    const t = useTranslations("Services");
    return (
        <Container>
            <section data-aos="fade-up" id={MENU_ID_LIST.SERVICES} className="w-full mt-[30px] lg:mt-[96px]">
                <h2 className="font-bold text-slate-700 dark:text-slate-100 text-2xl lg:text-[32px] text-center">{t("title")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-[59px] gap-6">
                    {servicesType?.map((service) => (
                        <ServiceItem key={service.idx} item={service} />
                    ))}
                </div>
            </section>
        </Container>
    );
};

export const ServiceItem = ({ item }: { item: IService }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("Services");

    return (
        <>
            <Card className="w-full max-w-[48rem] flex flex-row ">
                <CardHeader shadow={false} floated={false} className="m-0 w-2/5 shrink-0 rounded-r-none">
                    <img src={item?.imageUrl ?? "image"} alt={item?.imageUrl} className="h-full w-full object-cover" />
                </CardHeader>
                <CardBody className="p-6 flex flex-col w-full h-full justify-center gap-2">
                    <Typography variant="h4" className="mb-2 text-xl font-semibold text-slate-700 dark:text-slate-100">
                        {item?.name?.tag[lang_current]!}
                    </Typography>
                    <a href={`/services/${item.idx}`} className="inline-block">
                        <Button className="flex items-center  gap-2 dark:text-white bg-primary-green border-none">
                            <span>{t("buttonMore")}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </>
    );
};
