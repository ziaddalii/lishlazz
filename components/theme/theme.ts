"use client";
import { Cairo } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// const roboto = Roboto({
//     weight: ["300", "400", "500", "700"],
//     subsets: ["latin"],
//     display: "swap",
// });

const cairo = Cairo({
    weight: ["300", "400", "500", "700"],
    subsets: ["arabic", "latin"],
    display: "swap",
});

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#E53618",
        },
        secondary: {
            main: "#007aff",
        },
        grey: {
            main: "#9E9E9E",
            light: "#757575",
            dark: "#616161",
        },
        text: {
            primary: "#393f52",
        },
        background: {
            default: "#f1f3f6",
        },
    },
    typography: {
        fontFamily: cairo.style.fontFamily,

    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
        },
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === "info" && {
                        backgroundColor: "#FFFFFF",
                    }),
                }),
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                },
            },
        },
    },
});

export default theme;


