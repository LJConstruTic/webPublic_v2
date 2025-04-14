"use client";

import { IProduct } from "@/domain/models/Product";
import ProductGatewayHttp from "@/infra/gateway/product/productGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { ContactUs } from "@/presentation/components/ContactUs";
import Loading from "@/presentation/components/loading";
import { Button } from "@/presentation/components/ui/button";
import { getCookie } from "cookies-next";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<IProduct>();
    const [isLoading, setIsLoading] = useState(true);
    const httpClient = new AxiosAdapter();
    const productGatewayHttp = new ProductGatewayHttp(httpClient);
    const t = useTranslations("Products");
    const lang_current = getCookie("NEXT_LOCALE") as string;

    async function getProduct(productId: string) {
        try {
            const response = await productGatewayHttp.getProductById(productId);
            if (response?.result === 0) {
                window.location.replace("/not-found");
                return;
            }
            setProduct(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            window.location.replace("/not-found");
        }
    }

    useEffect(() => {
        getProduct(params.id);
    }, [params.id]);

    if (isLoading) return <Loading />;

    return (
        <main className="w-full min-h-screen dark:bg-transparent">
            <section className="max-w-[1248px] px-3 xl:px-0 h-auto py-5 xl:py-0 xl:h-[573px] mx-auto w-full flex flex-col items-center gap-10 lg:flex-row ">
                <div className="xl:max-w-[440px] rounded-md h-[403px] w-full ">
                    <Image
                        width={440}
                        height={403}
                        src={product?.imageUrl!}
                        alt={product?.title?.tag.pt}
                        className="w-full h-full object-top"
                        loading="lazy"
                        quality={90}
                        layout="responsive"
                    />
                </div>
                <div className="w-full flex flex-col justify-between gap-10">
                    <div>
                        <h3 className="text-green-500">{t("title")}</h3>
                        <h2 className="font-bold text-2xl">{product?.title?.tag[lang_current]!}</h2>
                    </div>
                    <div className="flex flex-col gap-6 text-sm text-justify lg:text-start">
                        <p>{product?.description!}  </p>
                    </div>
                    <div>
                        <Button className="bg-primary-green text-white flex gap-1">
                            <span>{t("contactButton")}</span>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </section>
            <ContactUs />
        </main>
    );
}
