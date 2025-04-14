"use client";
import { Audio } from "react-loader-spinner";

export default function Loading() {
    return (
        <main className="w-full h-screen z-[100] flex justify-center items-center">
            <Audio height="80" width="80" color="#2847cc" ariaLabel="bars-loading" />
        </main>
    );
}
