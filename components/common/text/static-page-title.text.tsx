import {ReactNode} from "react";
import {Typography} from "@mui/material";

interface Props {
    title: string;
}

export function PageTitleText({title}: Props) {
    return (
        <div className="border-b-1 border-b">
            <h2 className="relative py-4 font-bold text-3xl after:absolute after:bg-primary-500 after:h-1 after:w-20 after:bottom-0 after:start-0">{title}</h2>
        </div>
    );
}
