"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ContainerRoot";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Item } from "@/domain/models/component";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";

const IMG_1 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/software2222.jpeg?etag=%22212ee6-6661b500%22&sourceContentType=image%2Fjpeg&withoutEnlargement&resize=2500&quality=85";
const IMG_2 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/softwareMatenance22webp.webp?etag=%22e0da-6661a706%22&sourceContentType=image%2Fwebp";
const IMG_3 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/unsplash__TPTXZd9mOo%281%29.jpg?etag=%2219aa52-6660e172%22&sourceContentType=image%2Fjpeg&withoutEnlargement&resize=2500&quality=85";

const bannerArray = [
    {
        name: "Tecnologia",
        imgUrl: IMG_1,
        tag: "software",
    },
    {
        name: "Manutenção",
        imgUrl: IMG_2,
        tag: "software_matenance",
    },
    {
        name: "Construção",
        imgUrl: IMG_3,
        tag: "software",
    },
];

type props = {
    bannerData: Item[];
};

export const Banner = ({ bannerData }: props) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("HomePage.banner");
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 200);
        }
    };

    return (
        <section className="w-full flex lg:flex-row flex-col lg:gap-0 h-auto">
            <div className="w-full relative h-full max-h-[400px] xl:max-h-[580px] ">
                <Splide
                    className="w-full h-full reset-padding-margin"
                    options={{
                        type: "loop",
                        pagination: false,
                        arrows: false,
                        fixedWidth: "100%",
                        fixedHeight: "100%",
                        perPage: 1,
                        perMove: 1,
                        drag: "free",
                        interval: 3000,
                        rewind: true,
                        speed: 800,
                        width: "100%",
                    }}
                    style={{ padding: 0, margin: 0 }}
                >
                    {bannerArray?.map((item, idx) => (
                        <SplideSlide key={idx}>
                            <main data-aos="fade-down" className="w-full relative h-auto flex flex-col">
                                <section className="relative w-full h-auto xl:max-w-[1280px] mx-auto">
                                    <div className="w-full top-16 absolute z-[100] px-3 xl:px-0 flex flex-col justify-center lg:justify-start items-center lg:items-start lg:gap-9 gap-8">
                                        <h4 className="lg:text-[52px] text-white text-2xl text-center md:text-start font-bold sm:leading-[50px] xl:leading-[65.35px]">
                                            {bannerData[0]?.tag[lang_current]}
                                        </h4>
                                        <p className="text-xs text-center md:text-justify text-white lg:text-left xl:text-lg lg:max-w-[700px]">
                                            {bannerData[1]?.tag[lang_current]}
                                        </p>
                                        <div className="flex justify-center md:justify-start">
                                            <a href="#contact" onClick={(e) => handleClick(e, "contact")}>
                                                <Button className="rounded-full md:px-5 px-3 bg-primary-green dark:text-white py-5 md:py-8 flex gap-1 items-center">
                                                    <span>{t("buttonContact")}</span>
                                                    <ArrowRight width={16} />
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                                <div className="w-full h-full bg-black relative">
                                    <img src={item.imgUrl} alt="" className="w-full h-[400px] xl:h-[580px] object-cover" />
                                    <div className="absolute inset-0 bg-black opacity-65"></div>
                                </div>
                            </main>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    );
};
