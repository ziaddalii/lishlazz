"use client";
import { Button } from "@mui/material";
import theme from "@/components/theme/theme";

const NeonButton = ({ children, hover }: any) => {
    return (
        <Button
            variant="outlined"
            sx={{
                background: "white!important",
                boxShadow: "0px 11.5338px 11.5338px rgba(228, 0, 43, 0.1)",

                "&:hover": {
                    background: hover ? `${theme.palette.primary.main}!important` : "white",
                    color: hover ? "white" : `${theme.palette.primary.main}`,
                    boxShadow: hover ? "0px 11.5338px 11.5338px rgba(228, 0, 43, 0.2)" : "0px 11.5338px 11.5338px rgba(228, 0, 43, 0.1)",
                },
            }}
        >
            {children}
        </Button>
    );
};

export default NeonButton;
