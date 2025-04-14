import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn(className, "max-w-[1248px] relative h-auto mx-auto px-3 xl:px-0")}>{children}</div>;
};
