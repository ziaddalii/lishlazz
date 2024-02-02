import { Box, Button, Container, Divider } from "@mui/material";
import { build_meta_data, LocaleParams } from "@/app/[locale]/layout";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { TLocale } from "@/interfaces/global.interface";
import { format_price } from "@/util/formatting.util";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CartMainSection from "@/components/pages/cart/cart-main.section";
import Link from "next/link";
import { cart, deals } from "@/app/[locale]/menu/page";
import CartCard from "@/components/common/cards/cart.card";
import CartBottomBar from "@/components/pages/cart/cart-bottom-bar";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PercentIcon from "@mui/icons-material/Percent";
import CouponDialog from "@/components/common/dialogs/coupon.dialog";
export async function generateMetadata({ params: { locale } }: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslator(locale);
    return build_meta_data(locale, [t("pages.cart")]);
}

interface Props {
    params: {
        locale: TLocale;
    };
}

export default async function CartPage({ params: { locale } }: Props) {
    const t = await getTranslator(locale);

    // const {
    //     summary,
    //     items,
    //     other: {with_cutlery, with_ketchup},
    //     extras,
    // } = await get_cart();

    // const {
    //     summary,
    //     items,
    //     other: {with_cutlery, with_ketchup},
    //     extras,
    // } = cart_data;

    return (
        <Box component="main">
            {/*Items in Cart*/}
            <Box>
                {/*Items List*/}
                {/*<CartList data={items}*/}

                {/*Optional*/}
                {/*<CartOptionalInstructionsSection/>*/}

                {/*Green*/}
                {/*<CartGreenSection with_cutlery with_ketchup/>*/}

                {/*Complete Meal*/}
                {/*<CartExtrasSection data={extras}/>*/}
            </Box>

            {/*Order Summary*/}
            <Box>{/*<CartOrderSummary summary/>*/}</Box>

            <Container component="main" maxWidth="xl">
                <div className="grid lg:grid-cols-6 grid-cols-4 relative py-8 gap-4">
                    {/* Main Section */}
                    <CartMainSection locale={locale} cart={cart} />

                    {/* Aside section */}
                    <aside className="col-span-2 lg:block hidden sticky min-h-[50dvh] h-fit top-20 bg-white rounded-lg">
                        <h2 className="bg-blue-50 font-bold text-lg p-4">
                            {t("fields.order_summary")}
                        </h2>
                        <div className="p-4 space-y-4">
                            <div className="px-4 py-6 shadow-md flex justify-between items-center rounded-lg">
                                <div className="flex gap-2 items-center">
                                    <MapsHomeWorkIcon />
                                    <p className="text-[#007aff] font-bold">{t("fields.select_location")}</p>
                                </div>
                                {locale === "en" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                            </div>
                            <CouponDialog locale={locale}/>
                            <div className="p-4 space-y-4 shadow-md rounded-lg">
                                <div className="flex justify-between items-center">
                                    <span className="">{t("fields.subtotal")}</span>
                                    <span className="">{format_price(cart.total_price)} {t("fields.price_in_egp")}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="">{t("fields.delivery")}</span>
                                    <span className="">{format_price(cart.total_price)} {t("fields.price_in_egp")}</span>
                                </div>
                                <Divider />
                                <div className="flex justify-between items-center">
                                    <span className="">{t("fields.total")}</span>
                                    <span className="">{format_price(cart.total_price)} {t("fields.price_in_egp")}</span>
                                </div>
                                <p className="text-xs italic text-[#fb8d45]">
                                    {t("fields.inclusive_of_vats")} {format_price(cart.total_price)} {t("fields.price_in_egp")}
                                </p>
                            </div>
                        </div>
                        <div className="h-14 invisible"></div>
                        <Button
                            component={Link}
                            href="/auth/account/checkout"
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
                    <CartBottomBar locale={locale} cart={cart} />
                </div>
            </Container>
        </Box>
    );
}
