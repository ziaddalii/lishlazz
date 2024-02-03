import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import { build_meta_data, LocaleParams } from "@/app/[locale]/layout";
import { get_home } from "@/api/requests.api";
import { getTranslations } from "next-intl/server";
import { TLocale } from "@/interfaces/global.interface";
import Image from "next/image";
import HomeExploreMenuSection from "@/components/pages/home/explore-menu.section";
import home_data from "@/data/home_data";
import HomeDealsSection from "@/components/pages/home/deals.section";
import HomeBestSellersSection from "@/components/pages/home/best-sellers.section";
import HomeFavoritesSection from "@/components/pages/home/favorites.section";
import HomePickupSection from "@/components/pages/home/pickup.section";
import HomeQrSection from "@/components/pages/home/qr.section";
import HomeExtraSection from "@/components/pages/home/extra.section";
import HomeContactSection from "@/components/pages/home/contact.section";
import carousel1 from "@/public/home/carousel/1.jpg";
import carousel2 from "@/public/home/carousel/2.jpg";
import carousel3 from "@/public/home/carousel/3.jpg";
import BurgerMeal from "@/public/food/meal-burger.png";
import { SlidesPerviewCarousel, AutoSlidesPerviewCarousel } from "@/components/common/carousels/images.carousel";
import HomeSafetySection from "@/components/pages/home/contact.section";
export async function generateMetadata({ params: { locale } }: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslations();
    return build_meta_data(locale, [t("pages.home")]);
}

export interface ImageModel {
    photo_url: string;
    id?: string;
    order?: number;
    seo_tags?: string;
    created_at?: string;
}

interface Props {
    params: {
        locale: TLocale;
    };
}

export default async function HomePage({ params: { locale } }: Props) {
    const t = await getTranslations();
    const banners = [
        {
            id: "1",
            photo_url: carousel1,
            description: "alt",
        },
        {
            id: "2",
            photo_url: carousel2,
            description: "alt",
        },
        {
            id: "3",
            photo_url: carousel3,
            description: "alt",
        },
        {
            id: "4",
            photo_url: carousel2,
            description: "alt",
        },
        {
            id: "5",
            photo_url: carousel3,
            description: "alt",
        },
    ];

    const explore = [
        {
            id: "1",
            image: carousel1,
            names: {
                en: "english",
                ar: "arabic",
            },
            exclusive: true,
        },
        {
            id: "2",
            image: carousel2,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "3",
            image: carousel3,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "4",
            image: carousel2,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "5",
            image: carousel3,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
    ];

    const deals = [
        {
            id: "1",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: true,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "4",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "5",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
        {
            id: "2",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: false,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
        {
            id: "3",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: false,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
        {
            id: "4",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: false,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
        {
            id: "5",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: false,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
        {
            id: "6",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: false,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
        {
            id: "7",
            photo_url: BurgerMeal,
            names: {
                ar: "ميجا برجر",
                en: "Mega Burger",
            },
            name: "Mega Burger - ميجا برجر",
            descriptions: {
                ar: "ساندويتش مايتي زنجر + ساندويتش زنجر + ساندويتش تويستر + ساندويتش سوبريم + كول سلو صغير + 1 لتر مشروب",
                en: "Mighty Zinger sandwich + Zinger Sandwich + Twister Sandwich + Supreme Sandwich + Large coleslaw + 1 L Drink",
            },
            seo_tags: "",
            prices: {
                normal: "420",
                discount: "373",
                percent: "10%",
            },
            status: {
                is_app_exclusive: false,
            },
            options: [
                {
                    id: "1",
                    title: "Select Your favorite sandwich",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
                {
                    id: "2",
                    title: "Choose your condiments",
                    optional: true,
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                            list: [
                                {
                                    id: "1",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "2",
                                    name: "Mighty Zinger Sandwich",
                                },
                                {
                                    id: "3",
                                    name: "Mighty Zinger Sandwich",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3",
                    title: "Select Your favorite side item",
                    choices: [
                        {
                            id: "1",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "2",
                            name: "Mighty Zinger Sandwich",
                        },
                        {
                            id: "3",
                            name: "Mighty Zinger Sandwich",
                        },
                    ],
                },
            ],
        },
    ];

    const best_sellers = [
        {
            id: "1",
            photo_url: carousel1,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "2",
            photo_url: carousel2,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "3",
            photo_url: carousel3,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "4",
            photo_url: carousel2,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
        {
            id: "5",
            photo_url: carousel3,
            names: {
                en: "english",
                ar: "arabic",
            },
        },
    ];
    // const {} = await get_home();
    const {
        // banners,
        // explore,
        // deals,
        // best_sellers,
    } = home_data;

    return (
        <>
            <div className="md:block hidden">
                <SlidesPerviewCarousel
                    slidesPerView={{ main: 1 }}
                    spaceBetween={{ main: 20 }}
                    pagination={true}
                    navigation={true}
                    autoplay={{ delay: 2000, disableOnInteraction: true }}
                    loop={true}
                    slides={banners.map((banner, i) => (
                        <a href="#" key={banner.id}>
                            <Image
                                width={1400}
                                height={420}
                                priority
                                key={i}
                                className="w-full h-[420px] object-cover"
                                alt={banner.description}
                                src={banner.photo_url}
                            />
                        </a>
                    ))}
                />
            </div>
            <div className="md:hidden block mt-8">
                <AutoSlidesPerviewCarousel
                    slides={banners.map((image, i) => (
                        <a key={i} href="facebook.com" className="px-2 block">
                            <img
                                key={i}
                                className="pointer-events-none rounded-xl h-[168px] w-full object-cover"
                                alt={image.description}
                                src={image.photo_url.src}
                            />
                        </a>
                    ))}
                />
            </div>
            <Container maxWidth="xl">
                {/*Carousel*/}

                {/*Explore Menu Section*/}
                {explore.length !== 0 && <HomeExploreMenuSection data={explore} locale={locale} t={t} />}

                {/*Deals Section*/}
                {deals.length !== 0 && <HomeDealsSection data={deals} locale={locale} t={t} />}

                {/*Best Sellers*/}
                {best_sellers.length != 0 && <HomeBestSellersSection data={best_sellers} locale={locale} t={t} />}

                {/*Favorites / Pickup*/}
                <section className="grid gap-8 md:grid-cols-2 grid-cols-1">
                    {/*Favorites*/}
                    <HomeFavoritesSection locale={locale} />

                    {/*PickUp*/}
                    <HomePickupSection locale={locale} />
                </section>

                {/*QR / Extra*/}
                <section className="grid gap-8 md:grid-cols-2 grid-cols-1">
                    {/*QR*/}
                    <HomeQrSection locale={locale} />

                    {/*Extra*/}
                    <HomeExtraSection locale={locale} t={t} />
                </section>

                {/*Contact*/}
                <HomeSafetySection t={t} />
            </Container>
        </>
    );
}
