"use client";

import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

export const MoveUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible ? (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 cursor-pointer right-5 p-3 rounded-full bg-primary-green text-white shadow-md hover:brightness-75 transition-all"
                    aria-label="Voltar ao topo"
                >
                    <MoveUp className="w-5 h-5" />
                </button>
            ) : null}
        </div>
    );
};
