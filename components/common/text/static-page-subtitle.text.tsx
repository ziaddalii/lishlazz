import {ReactNode} from "react";
import {Typography} from "@mui/material";

interface Props {
    children: ReactNode;
}

export function StaticPageSubtitleText({children}: Props) {
    return (
            <Typography>
                {children}
            </Typography>
    );
}
