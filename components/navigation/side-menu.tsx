"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRef, useState, useEffect, ReactNode, MouseEvent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChangeLocaleButton from "../common/buttons/change-locale.button";
import EgyptFlag from "@/public/countries/egypt.png";
import CountryDialog from "./country-dialog";
import StoreIcon from "@mui/icons-material/Store";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FastfoodIcon from "@mui/icons-material/Fastfood";
export interface countryModel {
    id: string;
    name: string;
    shortName: string;
    code: string;
    flag: StaticImageData;
}

export interface CustomerServiceModel {
    id: string;
    title: string;
    icon: ReactNode;
    link: string;
    new?: boolean;
}

export interface StaticPagesModel {
    id: string;
    title: string;
    link: string;
}

function SideMenu() {
    const t = useTranslations();

    const [showSideMenu, setShowSideMenu] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowSideMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    useEffect(() => {
        if (showSideMenu) {
            if (typeof window != "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "unset";
        }
    }, [showSideMenu]);

    const countries: countryModel[] = [
        {
            id: "1",
            name: "Egypt",
            shortName: "Egy",
            code: "+20",
            flag: EgyptFlag,
        },
        {
            id: "2",
            name: "Egypt",
            shortName: "Egy",
            code: "+20",
            flag: EgyptFlag,
        },
        {
            id: "3",
            name: "Egypt",
            shortName: "Egy",
            code: "+20",
            flag: EgyptFlag,
        },
        {
            id: "4",
            name: "Egypt",
            shortName: "Egy",
            code: "+20",
            flag: EgyptFlag,
        },
        {
            id: "5",
            name: "Egypt",
            shortName: "Egy",
            code: "+20",
            flag: EgyptFlag,
        },
    ];

    const customer_services: CustomerServiceModel[] = [
        {
            id: "1",
            title: t("fields.store_locations"),
            icon: <StoreIcon />,
            link: "/store-locations",
        },
        {
            id: "2",
            title: t("fields.track_order"),
            icon: <ContentPasteSearchIcon />,
            link: "/track-order",
        },
        {
            id: "3",
            title: t("fields.order_history"),
            icon: <MenuIcon />,
            link: "/order-history",
        },
        {
            id: "4",
            title: t("fields.offers"),
            icon: <LocalOfferIcon />,
            link: "/offers",
        },
        {
            id: "5",
            title: t("fields.explore_menu"),
            icon: <MenuBookIcon />,
            link: "/menu",
        },
        {
            id: "6",
            title: t("fields.bulk_order"),
            icon: <FastfoodIcon />,
            link: "/bulk-order",
            new: true,
        },
    ];

    const static_pages: StaticPagesModel[] = [
        {
            id: "1",
            title: t("fields.feedback"),
            link: "/feedback",
        },
        {
            id: "2",
            title: t("fields.faq"),
            link: "/faq",
        },
        {
            id: "3",
            title: t("fields.terms_conditions"),
            link: "/terms",
        },
        {
            id: "4",
            title: t("fields.privacy_policy"),
            link: "/privacy-policy",
        },
        {
            id: "5",
            title: t("fields.contact_us"),
            link: "/contact-us",
        },
        {
            id: "6",
            title: t("fields.nutrition_information"),
            link: "/nutrition_information-info",
        },
    ];

    return (
        <>
            <button onClick={() => setShowSideMenu(!showSideMenu)}>
                <MenuIcon fontSize="large" />
            </button>
            <div
                ref={menuRef}
                className={`absolute z-10 shadow-lg bg-white transition-all h-screen top-0 py-8 px-4 w-[19rem] ${
                    showSideMenu ? "opacity-100 start-[0]" : "opacity-0 start-[-18rem]"
                }`}
            >
                <ul className="text-start text-sm divide-y">
                    <button>
                        <CloseIcon fontSize="large" onClick={() => setShowSideMenu(!showSideMenu)} />
                    </button>
                    {/* Login card */}
                    <article className="flex items-center gap-2 py-2">
                        <AccountCircleIcon fontSize="large" color="primary" />
                        <div className="text-start text-xs">
                            {t("fields.login_to_unlock_exclusive")} <strong> {t("fields.offers_and_discounts")}</strong>
                        </div>
                        <div>
                            <Button
                                component={Link}
                                href="/auth/login"
                                variant="outlined"
                                size="small"
                                className="text-xs"
                            >
                                {t("fields.login")}
                            </Button>
                        </div>
                    </article>
                    <article className="space-y-2 py-2">
                        <div className="flex items-center justify-between">
                            <strong className="text-start text-sm">{t("fields.language_in_both")}</strong>
                            <ChangeLocaleButton />
                        </div>
                        <div className="flex items-center justify-between">
                            <strong className="text-start text-sm">{t("fields.country")}</strong>
                            <CountryDialog currentCountry={countries[0]} countries={countries} />
                        </div>
                    </article>
                    <article className="space-y-2 py-2">
                        <ul>
                            {customer_services.map((service) => {
                                return (
                                    <li key={service.id} onClick={() => setShowSideMenu(!showSideMenu)}>
                                        <Link
                                            className="block hover:bg-gray-100 hover:underline rounded-md transition font-bold py-3"
                                            href={service.link}
                                        >
                                            {service.icon} {service.title}{" "}
                                            {service.new && <FiberNewIcon className="ms-2" color={"primary"} />}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </article>
                    <article className="space-y-2 py-2">
                        <ul>
                            {static_pages.map((page) => {
                                return (
                                    <li key={page.id} onClick={() => setShowSideMenu(!showSideMenu)}>
                                        <Link
                                            className="block hover:bg-gray-100 hover:underline rounded-md transition font-bold py-3"
                                            href={page.link}
                                        >
                                            {page.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </article>
                    <article className="space-y-2 py-2">
                        <Link
                            className="flex w-full gap-2 items-center hover:bg-gray-100 hover: rounded-md transition font-bold py-3 uppercase text-lg"
                            href="/contact-us"
                        >
                            <LocalPhoneRoundedIcon
                                fontSize={"small"}
                                className="bg-primary-500 text-white box-content p-2 aspect-1 rounded-full"
                            />
                            {t("fields.call_support")}
                        </Link>
                    </article>
                </ul>
            </div>
        </>
    );
}

export default SideMenu;
