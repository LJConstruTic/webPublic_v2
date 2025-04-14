"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {
    children: React.ReactNode;
};

const HamburgerMenu = ({ children }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="flex items-center lg:hidden justify-center w-10 h-10 text-gray-700 focus:outline-none" onClick={toggleMenu}>
                {isOpen ? <X width={24} /> : <Menu width={24} />}
            </button>

            <nav
                className={`absolute top-12 right-0 bg-white dark:bg-black border border-gray-200 rounded-lg shadow-lg w-40 transition-transform duration-300 ${
                    isOpen ? "transform scale-100" : "transform scale-0"
                }`}
            >
                <ul className="flex flex-col space-y-2 p-4">
                    <li className="hover:text-primary-blue hover:font-semibold">
                        <a href="/#aboutus">Quem somos</a>
                    </li>
                    <li className="hover:text-primary-blue hover:font-semibold">
                        <a href="/#products">Produtos</a>
                    </li>
                    <li className="hover:text-primary-blue hover:font-semibold">
                        <a href="/#services">Serviços</a>
                    </li>
                    <li className="hover:text-primary-blue hover:font-semibold">
                        <a href="/#contact">Contato</a>
                    </li>
                    <li>{children}</li>
                </ul>
            </nav>
        </div>
    );
};

export { HamburgerMenu };
