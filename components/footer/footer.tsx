import { GlobalInterface } from "@/interfaces/global.interface";
import { getTranslator } from "next-intl/server";
import SocialButton from "@/components/common/buttons/social.button";
import Logo from "@/public/logo.png";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactNode } from "react";
interface Props extends GlobalInterface {}

interface PageData {
    name: string;
    link: string;
}

interface SocialData {
    icon: ReactNode;
    link: string;
}

const social_list: SocialData[] = [
    {
        icon: <FacebookIcon />,
        link: "www.facebook.com",
    },
    {
        icon: <InstagramIcon />,
        link: "www.instagram.com",
    },
    {
        icon: <TwitterIcon />,
        link: "www.twitter.com",
    },
];

export default async function Footer({ locale, data }: Props) {
    const t = await getTranslator(locale as string);

    const pages_data: PageData[] = [
        {
            name: t!("fields.menu"),
            link: "/menu",
        },
        {
            name: t!("fields.store_locations"),
            link: "/store-locations",
        },
        {
            name: t!("fields.bulk_order"),
            link: "/bulk-order",
        },
        {
            name: t!("fields.privacy_policy"),
            link: "/privacy",
        },
        {
            name: t!("fields.terms_conditions"),
            link: "/terms",
        },
        {
            name: t!("fields.contact_us"),
            link: "/contact-us",
        },
    ];

    return (
        <footer className="bg-[#393f52] mt-8">
            <Container maxWidth="xl">
                <div className="space-y-8 py-12">
                    {/* Logo */}
                    <Image
                        className="w-auto object-contain mx-auto"
                        width={100}
                        height={30}
                        src={Logo}
                        alt="lishlazz logo - لوجو ليشلاز"
                    />
                    {/* Items Availability */}
                    <p className="font-bold text-center text-white opacity-50">{t("footer.items_availability")}</p>
                    {/* Pages */}
                    <ul className="flex flex-wrap gap-6 items-center md:justify-between justify-center">
                        {pages_data.map((page, i) => {
                            return (
                                <li key={i} className="text-center">
                                    <Link className="text-center text-white" href={page.link}>
                                        {page.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <ul className="flex items-center justify-center gap-8 max-w-md mx-auto">
                        {social_list.map((social, i) => {
                            return (
                                <li key={i}>
                                    <Link className="text-center text-white" href={social.link}>
                                        {social.icon}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="font-bold text-center text-white opacity-50">{t("footer.all_rights")}</p>
                </div>
            </Container>

            {/*Pages a href=link - t(name)*/}
            {/*{pages_data.forEach((e) => (*/}
            {/*    */}
            {/*))}*/}

            {/*Social Buttons*/}
            {/*<SocialButton link= img_url= alt=*/}

            {/*All Rights Text*/}
        </footer>
    );
}
