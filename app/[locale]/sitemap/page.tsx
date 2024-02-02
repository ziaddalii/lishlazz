import {Box, Container} from "@mui/material";
import Link from "next/link";
import {build_meta_data} from "@/app/[locale]/layout";
import {Metadata} from "next";
import {getTranslator} from "next-intl/server";
import {get_sitemap} from "@/api/requests.api";
import Image from "next/image";
import {TLocale} from "@/interfaces/global.interface";
import { PageTitleText } from "@/components/common/text/static-page-title.text";

interface LocaleParams {
    locale: TLocale;
}

export async function generateMetadata({params: {locale}}: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslator(locale);
    return build_meta_data(locale, [t("pages.sitemap")]);
}

interface Props {
    params: {
        locale: TLocale;
    };
}

export default async function SiteMapPage({params: {locale}}: Props) {
    
    // const {categories, meals} = await get_sitemap();
    // const {
    //     categories,
    //         meals,
    //     branches
    // } = sitemap_data;
    
    const sitemap = {
        meals:[
            {
                id:"1",
                en:"Big Mac",
                ar:"بيج ماك",
            },
            {
                id:"2",
                en:"Rizo",
                ar:"ريزو",
            },
            {
                id:"3",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
            {
                id:"4",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
            {
                id:"5",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
        ],
        stores:[
            {
                id:"1",
                en:"Big Mac",
                ar:"بيج ماك",
            },
            {
                id:"2",
                en:"Rizo",
                ar:"ريزو",
            },
            {
                id:"3",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
            {
                id:"4",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
            {
                id:"5",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
        ],
        categories:[
            {
                id:"1",
                en:"Big Mac",
                ar:"بيج ماك",
            },
            {
                id:"2",
                en:"Rizo",
                ar:"ريزو",
            },
            {
                id:"3",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
            {
                id:"4",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
            {
                id:"5",
                en:"Family Meal",
                ar:"وجبة عائلية",
            },
        ],
    };
    const t = await getTranslator(locale);
    
    return (
        <Box component="main">

            <Container maxWidth="xl" className="space-y-8">

                {/*/!*Title*!/*/}
                <PageTitleText title={t("fields.sitemap")}/>

                {/*3 Columns Categories / Stores / Meals*/}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                <div className="col-span-1">
                        <h2 className="text-xl font-bold mb-4">{t("fields.categories")}</h2>
                        <ul className="space-y-2">
                            {
                                sitemap.categories.map((meal) => {
                                    return(
                                        <li className="text-sm underline font-bold" key={meal.id}>
                                            <Link href={`/meals/${meal.id}`}>
                                                {meal[locale!]}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-bold mb-4">{t("fields.meals")}</h2>
                        <ul className="space-y-2">
                            {
                                sitemap.meals.map((meal) => {
                                    return(
                                        <li className="text-sm underline font-bold" key={meal.id}>
                                            <Link href={`/meals/${meal.id}`}>
                                                {meal[locale!]}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <h2 className="text-xl font-bold mb-4">{t("fields.stores")}</h2>
                        <ul className="space-y-2">
                            {
                                sitemap.stores.map((meal) => {
                                    return(
                                        <li className="text-sm underline font-bold" key={meal.id}>
                                            <Link href={`/meals/${meal.id}`}>
                                                {meal[locale!]}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        
        </Box>
    );
}
