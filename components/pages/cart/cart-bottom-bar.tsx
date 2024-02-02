"use client";

import theme from "@/components/theme/theme";
import { Global } from "@emotion/react";
import { Box, Button, CssBaseline, Skeleton, SwipeableDrawer, Typography, styled, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import MenuCartCard from "@/components/common/cards/menu-cart.card";
import { format_price } from "@/util/formatting.util";
const drawerBleeding = 72;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor: theme.palette.mode === "light" ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
    pointerEvents: "all",
}));

const CartBottomBar = (props: Props) => {

    const { window, cart, locale } = props;
    const t = useTranslations();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    const isLG = useMediaQuery(theme.breakpoints.up("lg"));
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div>
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        // height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: "visible",
                        pointerEvents: "all",
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: isLG ? "none" : "block",
                }}
            >
                <div className="cursor-pointer overflow-y-scroll">
                    <StyledBox
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap:"8px",
                            alignItems: "center",
                            position: "absolute",
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: "visible",
                            right: 0,
                            left: 0,
                            padding: "0 16px",
                        }}
                    >
                        <div className="flex gap-2 items-center">
                            <Image
                                className="object-contain max-w-[40px] w-fit h-[72px]"
                                alt="order image"
                                src={cart.cart_items[0].img}
                            />
                            <Typography
                                className="font-bold text-lg"
                                sx={{ py: 2, color: "text.secondary", fontWeight: "bold" }}
                            >
                                {cart.cart_items.length} {t("fields.items")}
                            </Typography>
                        </div>
                        <Link
                            href="/auth/account/cart"
                            className="flex gap-1 max-w-[250px] items-center text-white font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg p-2"
                        >
                            <div>
                                <p className="text-sm">
                                    {format_price(cart.total_price)} {t("fields.price_in_egp")}
                                </p>
                                <p className="text-[8px]">* {t("fields.all_prices_vat")}</p>
                            </div>
                            <div className="flex items-center">
                                <p className="whitespace-nowrap">{t("fields.place_order")}</p>
                                {locale === "en" ? (
                                    <ArrowForwardIosIcon fontSize="small" />
                                ) : (
                                    <ArrowBackIosIcon fontSize="small" />
                                )}
                            </div>
                        </Link>
                    </StyledBox>
                </div>
            </SwipeableDrawer>
        </div>
    );
};

export default CartBottomBar;
