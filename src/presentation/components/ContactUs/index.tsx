"use client";
import { ArrowRight } from "lucide-react";
import { Container } from "../ContainerRoot";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import * as yup from "yup";
import { useFormik } from "formik";
import { ErrorMessage } from "../ErrorMessage";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { IContact } from "@/domain/models/Contact";
import AxiosAdapter from "@/infra/http/axiosAdapter";
import ContactGatewayHttpClient from "@/infra/gateway/contact/contactGatewayHttp";
import { ComponentGatewayHttp } from "@/infra/gateway/component/componentGatewayHttp";
import { CONTACT_ID, MENU_ID_LIST } from "@/lib/data";
import { getCookie } from "cookies-next";
import { Component } from "@/domain/models/component";
import { useTranslations } from "next-intl";

export const ContactUs = () => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const [contactComponent, setContactComponent] = useState<Component>();
    const httpClient = new AxiosAdapter();
    const componentGatewayHttp = new ComponentGatewayHttp(httpClient);
    const lang_current = getCookie("NEXT_LOCALE") as string;
    const t = useTranslations("Contact");

    async function GetInfoContact() {
        try {
            const response = (await componentGatewayHttp.getComponentByTag(CONTACT_ID)) as Component;
            setContactComponent(response);
        } catch (err) {
            console.error(err);
        }
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
        validationSchema: yup.object({
            name: yup.string().required("Campo obrigatorio"),
            phone: yup.string().required("Campo obrigatorio"),
            email: yup.string().required("Campo obrigatorio"),
            message: yup.string().required("Campo obrigatorio"),
        }),
        onSubmit: async (values: Omit<IContact, "idx">) => {
            setDisabled(true);
            try {
                const httpClient = new AxiosAdapter();
                const contactGateway = new ContactGatewayHttpClient(httpClient);
                const response = await contactGateway.postContact(values);
                if (response) {
                    toast.success("Mensagem enviada com sucesso!");
                    formik.resetForm();
                    setDisabled(false);
                }
            } catch (error) {
                toast.error("Ups, ocorreu um erro inesperado!");
                setDisabled(false);
            } finally {
                setDisabled(false);
            }
        },
    });

    useEffect(function GetDatas() {
        GetInfoContact();
    }, []);

    return (
        <section
            data-aos="fade-in"
            id={MENU_ID_LIST.CONTACT}
            className="w-full bg-fixed bg-primary-blue py-10 text-white mt-[80px] lg:mt-[135px]"
        >
            <Container>
                <section className="flex flex-col lg:flex-row w-full gap-10">
                    <div className="w-full h-[420px] lg:h-[679px] rounded-[14px] ">
                        <iframe
                            src="https://www.google.com/maps?q=-12.394712,13.551266&amp;hl=es&amp;z=14&amp;output=embed"
                            width="100%"
                            height="100%"
                            className="rounded-[14px]"
                            frameBorder="0"
                        ></iframe>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-bold text-xl lg:text-2xl">{contactComponent?.items[0].tag[lang_current]!}</h2>
                            <span className="text-sm">{contactComponent?.items[1].tag[lang_current]!}</span>
                        </div>
                        <form onSubmit={formik.handleSubmit} className="mt-5 flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    {contactComponent?.items[3].tag[lang_current]!}
                                </label>
                                <Input
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    name="name"
                                    className="outline-none"
                                    style={{ outline: "none" }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name ? <ErrorMessage message={formik.errors.name} /> : null}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    {contactComponent?.items[4].tag[lang_current]!}
                                </label>
                                <Input
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    className="outline-none"
                                    style={{ outline: "none" }}
                                    name="phone"
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phone && formik.errors.phone ? <ErrorMessage message={formik.errors.phone} /> : null}
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="" className="text-sm lg:text-base">
                                    {contactComponent?.items[5].tag[lang_current]!}
                                </label>
                                <Input
                                    type="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    name="email"
                                    onBlur={formik.handleBlur}
                                    className="outline-none"
                                    style={{ outline: "none" }}
                                />
                                {formik.touched.email && formik.errors.email ? <ErrorMessage message={formik.errors.email} /> : null}
                            </div>
                            <div>
                                <Textarea
                                    rows={10}
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    name="message"
                                    onBlur={formik.handleBlur}
                                    className="resize-none focus:outline-none"
                                    style={{ outline: "none" }}
                                ></Textarea>
                                {formik.touched.message && formik.errors.message ? <ErrorMessage message={formik.errors.message} /> : null}
                            </div>

                            <div>
                                <Button type="submit" disabled={disabled} className="flex items-center bg-primary-green gap-1 text-white">
                                    <span>{t("buttonSend")}</span>
                                    <ArrowRight width={16} />
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
            </Container>
        </section>
    );
};
