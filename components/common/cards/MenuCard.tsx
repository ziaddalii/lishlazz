import { Button, Card, Divider } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import Image from "next/image";
import Link from "next/link";
import NeonButton from "../buttons/neon.button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteButton from "../buttons/favorite.button";
import CustomizeMealDialog from "../dialogs/customize-meal.dialog";
interface Props extends GlobalInterface {
    id: string;
    name: string;
    img: string;
    names: {
        en: string;
        ar: string;
    };
    descriptions: {
        en: string;
        ar: string;
    };
    description: string;
    card_url: string;
    status: {
        is_app_exclusive: boolean;
    };
    prices: {
        normal: number;
        discount: number;
        percent: number;
    };
}

export default function MenuCard({
    data,
    id,
    name,
    names,
    descriptions,
    description,
    card_url,
    img,
    prices,
    status,
    locale,
    t,
}: Props) {
    
    return (
        <div className="inline">
            <div className="mt-40 mb-12 relative">
                <CustomizeMealDialog
                    trigger={
                        <Link href={card_url} className="absolute w-full top-0 z-10 translate-y-[-50%]">
                            <Image className="mx-auto" src={img} alt={name} />
                        </Link>
                    }
                    data={data}
                    locale={locale}
                />

                <div className="bg-white relative rounded-xl pt-24 px-4 pb-6 space-y-4">
                    <div className="flex justify-between items-center relative z-10">
                        <strong>{names[locale!]}</strong>
                        <FavoriteButton meal_id={id} locale={locale} />
                    </div>
                    <Divider />
                    <article>
                        <p className="rounded-lg font-bold text-xs text-ellipsis line-clamp-3 overflow-hidden">
                            {descriptions[locale!]}
                        </p>
                    </article>
                    <article className="rounded-md text-xs flex flex-wrap justify-between bg-[#f0f4fa] p-2 !mb-2">
                        <div className="">
                            <p className="line-through text-start text-[10px]">
                                {prices.normal} {t!("fields.price_in_egp")}
                            </p>
                            <strong className="block text-start text-xs">
                                {prices.discount} {t!("fields.price_in_egp")}
                            </strong>
                        </div>
                        <div className="text-end">
                            <Button
                                component={Link}
                                href={card_url}
                                className="flex gap-2"
                                color="secondary"
                                sx={{
                                    background: "white",
                                    fontSize:"12px",
                                    ":hover": {
                                        background: "white",
                                    },
                                }}
                            >
                                {t!("fields.customize")}
                                {locale === "en" ? (
                                    <Button
                                        component="i"
                                        sx={{ minWidth: "0px !important", padding: "0px !important" }}
                                        variant="contained"
                                        color="secondary"
                                    >
                                        <ArrowForwardIcon fontSize="small" />
                                    </Button>
                                ) : (
                                    <Button
                                        component="i"
                                        variant="contained"
                                        sx={{ minWidth: "0px !important", padding: "2px !important" }}
                                        color="secondary"
                                    >
                                        <ArrowBackIcon fontSize="xSmall" />
                                    </Button>
                                )}
                            </Button>
                        </div>
                    </article>
                </div>
                <CustomizeMealDialog data={data} locale={locale}
                    trigger={
                        <div className="absolute left-[50%] bottom-0 translate-x-[-50%] w-full text-center translate-y-[50%] z-10">
                            <NeonButton hover={true}>&#43; {t!("fields.add_to_cart")}</NeonButton>
                        </div>
                    } />
            </div>
        </div>
    );
}
