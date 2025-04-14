import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Component } from "@/domain/models/component";
import { getCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { MENU_ID_LIST } from "@/lib/data";

const IMG1 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/ia2.jpg?etag=%221b2fc-66393773%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=547%2B340&quality=85";

const IMG2 =
    "https://ljconstrutic.com/____impro/1/onewebmedia/unsplash_prXwCmJolGA___serialized1.jpg?etag=%221dc60fa-666186f3%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=499%2B340";

type props = {
    aboutComponent: Component;
};

export const AboutUs = ({ aboutComponent }: props) => {
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("About");
    return (
        <main className="bg-primary-blue dark:bg-black w-full h-auto">
            <section
                id={MENU_ID_LIST.WHOARE}
                className="xl:max-w-[1248px] mx-auto w-full xl:h-[529px] h-auto px-3 xl:px-0 py-4 xl:py-0 gap-5 xl:gap-0 mt-[20px] lg:mt-[80px] flex flex-col xl:flex-row items-center dark:bg-black"
            >
                <div data-aos="fade-right" className="relative w-full max-w-[700px] h-[401px] hidden xl:flex">
                    <div className="w-[473.82px] absolute h-[340px] rounded-[14px] left-28 top-0 bg-black">
                        <img src={IMG2} alt="" className="w-full h-full object-cover rounded-[14px]" />
                    </div>
                    <div className="w-[473.82px] absolute h-[340px] rounded-[14px] top-24  bg-black">
                        <img src={IMG1} alt="" className="w-full h-full object-cover rounded-[14px]" />
                    </div>
                </div>
                <div data-aos="fade-left" className="w-full flex flex-col gap-8">
                    <h3 className="font-bold text-2xl text-slate-100">{aboutComponent?.items[0]?.tag[lang_current]!}</h3>
                    <p className="xl:max-w-[579.15px] text-sm text-justify text-slate-50 xl:text-start xl:text-base">
                        {aboutComponent?.items[1]?.tag[lang_current]!}
                    </p>
                    <div>
                        <Button className="bg-primary-green flex items-center gap-1  dark:text-white">
                            <Link href="/about">
                                <span>{t("buttonMore")}</span>
                            </Link>
                            <ArrowRight width={16} />
                        </Button>
                    </div>
                </div>
                <div className="xl:w-[473.82px] w-full h-[200px] md:h-[340px] flex  xl:hidden rounded-[14px] bg-black">
                    <img src={IMG1} className="w-full h-full object-cover rounded-[14px]" alt="" />
                </div>
            </section>
        </main>
    );
};
