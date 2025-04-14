"use client";
import { Component } from "@/domain/models/component";
import { ITeam } from "@/domain/models/Team";
import { ComponentGatewayHttp } from "@/infra/gateway/component/componentGatewayHttp";
import { TeamGatewayHttp } from "@/infra/gateway/team/teamGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { ABOUT_ID } from "@/lib/data";
import { ContactUs } from "@/presentation/components/ContactUs";
import { Container } from "@/presentation/components/ContainerRoot";
import { Card, Typography } from "@material-tailwind/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const IMG_EYE = "/look.png";
const IMG_FOGUET = "/foguet.png";
const IMG_URL =
    "https://s3-alpha-sig.figma.com/img/76b5/81b4/1102dd2a4b2e8801ba6094755a2b4ed9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I7nJJRVUsP9YNcdrNz2tMY-L9O8P~XfLOwn-bC1ro9YMH34mOMAxxTJ5lBTTbiFmHEV~HDoR-uJozA~vaSPAozUKwQK68IqdWx0vpeiqta4gmBfe777-M-qqbwvhpmiEZjMutsG0TPvenAmmWp7-nyf4m-SKsmcJF6MD06X9ScbUYnxGvhV9cXHRAUY6CXns6qUBPxO56lgdaNzsq47W5B8Cd5tz7HNSagSabbpSY~cZr420MO7aQT3cUWI6ebXQ9HcshfvqbijPnm~UhPHwi7dKA6zpoXGQeHpi~VcnJU76-CgPem13hww~maiM6tx6f9HM3G6~uMYGUbCwQhsJ4A__";
const IMG1 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/ia2.jpg?etag=%221b2fc-66393773%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=547%2B340&quality=85";

const IMG2 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/unsplash_prXwCmJolGA___serialized1.jpg?etag=%221dc60fa-666186f3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=499%2B340";

export const AboutView = () => {
    const [Teams, setTeams] = useState<{ size: number; items: ITeam[] }>({ size: 0, items: [] });
    const slideRef = React.useRef<any>(null);
    const t = useTranslations("About");
    const httpClient = new AxiosAdapter();
    const componentGatewayHttp = new ComponentGatewayHttp(httpClient);
    const teamGatewayHttp = new TeamGatewayHttp(httpClient);
    const [aboutComponent, setAboutComponent] = useState<Component>();
    const lang_current = getCookie("NEXT_LOCALE") as string;

    async function GetInfoAbout() {
        try {
            const response = (await componentGatewayHttp.getComponentByTag(ABOUT_ID)) as Component;
            setAboutComponent(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetTeams() {
        try {
            const response = await teamGatewayHttp.getTeam();
            setTeams(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        GetInfoAbout();
        GetTeams();
    }, []);

    return (
        <main className="w-full min-h-screen">
            <div
                className="w-full h-[378px] bg-primary-blue bg-opacity-95 pt-[105px] text-white"
                style={{
                    backgroundImage: `url(${IMG1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "soft-light",
                }}
            >
                <Container>
                    <h3 className="text-2xl font-bold text-[38px]">{t("title")}</h3>
                    <p className="max-w-[722px] mt-[14px]">{t("description")}</p>
                </Container>
            </div>

            <Container>
                <section className="w-full flex mt-[54px] items-center">
                    <div className="relative w-full max-w-[700px] h-[401px] hidden xl:flex">
                        <div className="w-[473.82px] absolute h-[340px] rounded-[14px] left-40 top-0 bg-black">
                            <img src={IMG2} alt="" className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                        <div className="w-[473.82px] absolute h-[340px] rounded-[14px] top-24 left-0 bg-black">
                            <img src={IMG1} alt="" className="w-full h-full object-cover rounded-[14px]" />
                        </div>
                    </div>
                    <div className="w-full xl:max-w-[580px] flex flex-col gap-2">
                        <h3 className="text-[32px] text-green-400">{t("history.title")}</h3>
                        <h4 className="text-[48px] font-bold text-primary-blue">{t("history.subtitle")}</h4>

                        <p className="text-justify">{aboutComponent?.items[1]?.tag[lang_current]!}</p>
                        <br />
                        <p className="text-justify">{aboutComponent?.items[2]?.tag[lang_current]!}</p>
                        <br />
                        <p className="text-justify">{aboutComponent?.items[3]?.tag[lang_current]!}</p>
                    </div>
                </section>

                <section className="mt-[125px] w-full">
                    <div className="flex items-center gap-4">
                        <div className="w-[105px] h-[80px] rounded-[10px] shadow-xl flex items-center justify-center">
                            <img src={IMG_EYE} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[28px] text-primary-blue">{t("our")}</span>
                            <span className="text-[32px] text-primary-blue font-semibold underline underline-offset-4">
                                {aboutComponent?.items[4]?.tag[lang_current]}
                            </span>
                        </div>
                    </div>
                    <div className="max-w-[1190px] text-[#766F6F] dark:text-slate-300 dark:bg-black mx-auto mt-[32px] bg-[#F5F5F5] p-8">
                        <p className="text-justify">{aboutComponent?.items[5]?.tag[lang_current]}</p>
                    </div>
                </section>

                <section className="mt-[125px] w-full">
                    <div className="flex items-center gap-4 flex-1 justify-end">
                        <div className="flex flex-col">
                            <span className="text-[28px] text-primary-blue">{t("our")}</span>
                            <span className="text-[32px] text-primary-blue font-semibold underline underline-offset-4">
                                {aboutComponent?.items[6]?.tag[lang_current]}
                            </span>
                        </div>
                        <div className="w-[105px] h-[80px] rounded-[10px] shadow-xl flex items-center justify-center">
                            <img src={IMG_FOGUET} width={50} alt="" />
                        </div>
                    </div>
                    <div className="max-w-[1190px] text-[#766F6F] dark:text-slate-300 dark:bg-black mx-auto mt-[32px] bg-[#F5F5F5] p-8 flex flex-col gap-4 w-full">
                        <p className="text-justify">{aboutComponent?.items[7]?.tag[lang_current]}</p>
                        <p>{aboutComponent?.items[8]?.tag[lang_current]}.</p>
                    </div>
                </section>
            </Container>
            {Teams ? (
                <section className="w-full bg-[#FBFBFB] dark:bg-black h-auto mt-20 xl:mt-[95px]">
                    <Container>
                        <div className="flex items-center gap-2 pt-[36px]">
                            <span className="text-[28px] text-green-400">{t("our")}</span>
                            <span className="text-[32px] text-primary-blue font-semibold">Equipa</span>
                        </div>
                        <section className="mt-[14px] w-full">
                            <Splide
                                ref={slideRef}
                                options={{
                                    fixedWidth: 300,
                                    fixedHeight: 350,
                                    type: "loop",
                                    pagination: false,
                                    arrows: false,
                                    perPage: 1,
                                    width: "100%",
                                    drag: "free",
                                    interval: 3000,
                                    rewind: true,
                                    gap: 24,
                                    speed: 800,
                                    perMove: 1,
                                    autoPlay: true,
                                    loop: true,
                                }}
                                style={{ width: "100%", padding: 0, margin: 0 }}
                            >
                                {Teams
                                    ? Teams.items?.map((item: any) => (
                                          <SplideSlide key={item.id}>
                                              <OficialCard key={item.id} item={item} />
                                          </SplideSlide>
                                      ))
                                    : null}
                            </Splide>
                        </section>
                    </Container>
                </section>
            ) : null}
            <ContactUs />
        </main>
    );
};

const OficialCard = ({ item }: { item: ITeam }) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    if (!item.id) return null;
    return (
        <>
            <Card className="max-w-xs">
                <Card.Header as="img" className="max-h-[240px]" src={item.imageUrl} alt={item.name.tag[lang_current]} />
                <Card.Body className="text-center line-clamp-2">
                    <Typography type="h5" className="text-slate-500 text-base">
                        {item.name.tag[lang_current]}
                    </Typography>
                    <Typography className="my-1 text-foreground text-sm">{item.job.tag[lang_current]}</Typography>
                </Card.Body>
            </Card>
        </>
    );
};
