"use client";
import { AboutUs } from "@/presentation/components/About";
import { Banner } from "@/presentation/components/Banner";
import { ContactUs } from "@/presentation/components/ContactUs";
import { Goals } from "@/presentation/components/goal";
import { MoveUpButton } from "@/presentation/components/MoveUp";
import { OurProducts } from "@/presentation/components/OurProducts";
import { OurServices } from "@/presentation/components/OurServices";
import { Strategy } from "@/presentation/components/strategy";
import React, { useEffect, useState } from "react";
import ProductGatewayHttp from "@/infra/gateway/product/productGatewayHttp";
import ServiceGatewayHttp from "@/infra/gateway/service/serviceGatewayHttp";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import { IProduct } from "@/domain/models/Product";
import { IService } from "@/domain/models/Service";
import GoalGatewayHttp from "@/infra/gateway/goal/goalGatewayHttp";
import { IGoal } from "@/domain/models/Goals";
import { ComponentGatewayHttp } from "@/infra/gateway/component/componentGatewayHttp";
import { ABOUT_ID, HOME_ID, PRODUCT_ID } from "@/lib/data";
import { Component, Item } from "@/domain/models/component";
import Loading from "@/presentation/components/loading";

export const HomeView = () => {
    const httpClient = new AxiosAdapter();
    const productGatewayHttp = new ProductGatewayHttp(httpClient);
    const serviceGatewayHttp = new ServiceGatewayHttp(httpClient);
    const goalGatewayHttp = new GoalGatewayHttp(httpClient);
    const componentGatewayHttp = new ComponentGatewayHttp(httpClient);
    const [products, setProduct] = useState<IProduct[]>([]);
    const [services, setService] = useState<IService[]>([]);
    const [componentHome, setComponentHome] = useState<Component>();
    const [productComponent, setProductComponent] = useState<Component>();
    const [goals, setGoal] = useState<IGoal[]>([]);
    const [bannerData, setBannerData] = useState<Item[]>([]);
    const [aboutComponent, setAboutComponent] = useState<Component>();
    const [loading, setLoading] = useState(true);

    async function GetProducts() {
        try {
            const response = await productGatewayHttp.getAllProducts();
            setProduct(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetInfoAbout() {
        try {
            const response = (await componentGatewayHttp.getComponentByTag(ABOUT_ID)) as Component;
            setAboutComponent(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetProductComponent() {
        try {
            const response = (await componentGatewayHttp.getComponentByTag(PRODUCT_ID)) as Component;
            setProductComponent(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetHomeDatas() {
        try {
            const response = (await componentGatewayHttp.getComponentByTag(HOME_ID)) as Component;
            setComponentHome(response);
            const HOME_TITLE = "homTitle";
            const HOME_PRESENTATION = "homPresentation";
            if (response) {
                const banner = response.items.filter(
                    (item, idx) => item.keyFrontView === HOME_TITLE || item.keyFrontView === HOME_PRESENTATION
                );
                if (banner) {
                    setBannerData(banner);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function GetServices() {
        try {
            const response = await serviceGatewayHttp.getServices();
            setService(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function GetGoals() {
        try {
            const response = await goalGatewayHttp.getGoals();
            setGoal(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(function getAllDatas() {
        setLoading(true);
        GetProducts();
        GetServices();
        GetGoals();
        GetHomeDatas();
        GetProductComponent();
        GetInfoAbout();
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) {
        return <Loading />;
    }
    return (
        <main>
            <Banner bannerData={bannerData!} />
            <OurProducts products={products!} productComponent={productComponent!} />
            <AboutUs aboutComponent={aboutComponent!} />
            <OurServices servicesType={services!} isLoading={false} />
            <Strategy />
            <Goals goals={goals!} />
            <ContactUs />
            <MoveUpButton />
        </main>
    );
};
