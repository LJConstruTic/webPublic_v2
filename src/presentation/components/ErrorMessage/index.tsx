import React from "react";

type props = {
    message: string;
};

export const ErrorMessage: React.FC<props> = ({ message }) => {
    return <span className="text-red-500 text-sm">{message}</span>;
};
