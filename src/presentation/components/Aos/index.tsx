"use client";

import { useEffect } from "react";
import AOS from "aos";

export const AosContainer = () => {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 40,
        });
    }, []);
    return <></>;
};
