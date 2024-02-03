"use client";
import { getTranslations } from "next-intl/server";
import { GlobalInterface } from "@/interfaces/global.interface";
import { GlobalProgressBarNotification } from "@/components/common/notifications/global-progress-bar.notification";
import { Autocomplete, Badge, Button, Container, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { OrderType, OrderTypeDesktop, OrderTypeMobile } from "./OrderType";
import MenuIcon from "@mui/icons-material/Menu";
import SideMenu from "./side-menu";
import ChangeLocaleButton from "../common/buttons/change-locale.button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface Props extends GlobalInterface { }

export default function NavBar({ locale }: Props) {
    // const t = await getTranslations(locale as string);
    const t = useTranslations();

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos) {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });
    return (
        <>
            <header className={`shadow-lg z-50 transition-all sticky w-full bg-white ${visible ? "top-0" : "-top-52"} `}>
                <Container maxWidth="xl">
                    <nav className="grid-cols-5 grid items-center justify-between py-2.5">
                        <div className="col-span-4 flex items-center gap-2">
                            
                            {/* BARS */}
                            <SideMenu />

                            {/* Logo */}
                            <Link href={"/"}>
                                <Image height="36" src={Logo} alt="Lishlazz Logo" />
                            </Link>
                            <div className="lg:block hidden">
                                <OrderType />
                            </div>

                            {/* Location Card */}
                            <div className="lg:p-2 lg:border flex items-center lg:border-1 md:w-fit rounded-lg lg:bg-cyan-100/20">
                                <div className="xl:block hidden">
                                    <FmdGoodOutlinedIcon />
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="font-bold text-xs">{t("fields.select_location")}</h4>
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            size="small"
                                            sx={{ fontSize: "10px", padding: "0px 6px", minWidth: "0px" }}
                                        >
                                            {t("fields.select")}
                                        </Button>
                                    </div>
                                    <p className="lg:text-xs text-[10px] text-gray-400">
                                        {t("fields.get_accurate_pricing_and_menu_listing")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 flex gap-4 items-center justify-end">
                            <Link href="/auth/account/cart">
                                <Badge badgeContent={4} color="primary" className="!hidden lg:!block">
                                    <ShoppingCartOutlinedIcon color="primary" />
                                </Badge>
                            </Link>
                            <ChangeLocaleButton />
                            <Button
                                component={Link}
                                href="/auth/login"
                                variant="contained"
                                className="!hidden lg:!block"
                            >
                                {t("fields.login")}
                            </Button>
                        </div>
                        <div className="col-span-5 block lg:hidden">
                            <OrderType />
                        </div>
                    </nav>
                </Container>
                <GlobalProgressBarNotification />
            </header>
        </>
    );
}
