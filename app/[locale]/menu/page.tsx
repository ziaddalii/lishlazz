import CategoryCard from "@/components/common/cards/category.card";
import { AppBar, Box, Button, Container, Tab, Tabs, Typography } from "@mui/material";
import { Metadata } from "next";
import { build_meta_data } from "@/app/[locale]/layout";
import { getTranslations } from "next-intl/server";
import { TLocale } from "@/interfaces/global.interface";
import MealsListSection from "@/components/common/lists/meals.list";
import carousel1 from "@/public/home/carousel/1.jpg";
import carousel2 from "@/public/home/carousel/2.jpg";
import carousel3 from "@/public/home/carousel/3.jpg";
import BurgerMeal from "@/public/food/meal-burger.png";
import MenuCartCard from "@/components/common/cards/menu-cart.card";
import theme from "@/components/theme/theme";
import MenuMainSection from "@/components/pages/menu/menu-main-section";
import CartDrawer from "@/components/pages/menu/cart-drawer";
import Meal from "@/public/food/meal-burger.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { format_price } from "@/util/formatting.util";
export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
    const t = await getTranslations();

    // const {category} = await get_categories();

    // const categories_names = categories.map((e) => (e.name)).join(" - ");
    // const filters_choices = categories.map((e) => (e.filters_choices.map((f) => (f.name)).join(" - "))).join(" - ");
    // const categories_icons = categories.map((e) => ({
    //     url: e.icon_url,
    //     alt: e.name,
    // }));

    return {
        // TODO MENU OR MENU | CATEGORY
        ...(await build_meta_data(locale, [t("pages.menu")])),
        // description: categories_names,
        // openGraph: {
        //     title: categories_names,
        //     description: filters_choices,
        //     url: `https://resellcle.com/${locale}/categories`,
        //     locale,
        //     images: categories_icons,
        //     siteName: t("app.name"),
        //     tags: [categories_names, filters_choices].join(" - "),
        // },
        // twitter: {
        //     title: categories_names,
        //     description: filters_choices,
        //     images: categories_icons,
        //     card: "summary_large_image",
        //     site: "www.resellcle.com",
        // },
    };
}

interface Props {
    params: {
        locale: TLocale;
        category_slugs: string[];
    };
}

export const deals = [
    {
        id: "1",
        name: "Meals",
        data: [
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
        ],
    },
    {
        id: "2",
        name: "Appetizers",
        data: [
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
        ],
    },
    {
        id: "3",
        name: "Compos",
        data: [
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
        ],
    },
];

export const cart = {
    cart_items: [
        {
            img: Meal,
            id: "1",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
        {
            img: Meal,
            id: "2",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
        {
            img: Meal,
            id: "3",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
        {
            img: Meal,
            id: "4",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
        {
            img: Meal,
            id: "5",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
        {
            img: Meal,
            id: "6",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
        {
            img: Meal,
            id: "7",
            name: {
                en: "Shrimp",
                ar: "جمبري",
            },
            details: "Shrimp Twister + Shrimp Rizo + Drink",
            quantity: 4,
            total_price: 6566,
        },
    ],
    total_quantity: 16,
    total_price: 16805,
};

export default async function MenuPage({ params: { locale, category_slugs } }: Props) {
    // const category_slug = category_slugs[0] ?? "";

    const t = await getTranslations();

    // const response_data = await get_category_details(category_slug);

    // const {
    //   category,
    //   other_categories,
    //   meals,
    // }  = category_data;

    return (
        <Container component="main" maxWidth="xl">
            <div className="grid lg:grid-cols-6 grid-cols-4 relative py-8 gap-4">
                <MenuMainSection locale={locale} data={deals} />

                {/*Meals List*/}

                <aside className="col-span-2 lg:block hidden sticky h-[80dvh] top-20 bg-white rounded-lg">
                    <h2 className="bg-blue-50 font-bold text-lg p-4">
                        {cart.total_quantity} {t("fields.items_added")}
                    </h2>
                    <div className="p-4 space-y-4 h-[65dvh] overflow-y-scroll">
                        {/*Cart Card*/}
                        {cart.cart_items.map((item) => {
                            return <MenuCartCard key={item.id} cart_item={item} locale={locale} t={t} />;
                        })}
                    </div>
                    <Button
                        component={Link}
                        href="/auth/account/cart"
                        variant="contained"
                        className="flex !justify-between gap-1 items-center text-white font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg"
                        sx={{
                            width: "104%",
                            marginInlineStart: "-2%",
                            padding: "1rem",
                            position: "absolute",
                            top: "88%",
                        }}
                    >
                        <div>
                            <p className="text-sm">
                                {format_price(cart.total_price)} {t("fields.price_in_egp")}
                            </p>
                            <p className="text-xs">* {t("fields.all_prices_vat")}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="whitespace-nowrap text-lg">{t("fields.place_order")}</p>
                            {locale === "en" ? (
                                <ArrowForwardIosIcon fontSize="small" />
                            ) : (
                                <ArrowBackIosIcon fontSize="small" />
                            )}
                        </div>
                    </Button>
                </aside>
                <CartDrawer locale={locale} cart={cart} />
            </div>
        </Container>
    );
}
