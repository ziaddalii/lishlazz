import DeliveryAddresses from "@/components/pages/checkout/delivery-address";
import { GlobalInterface } from "@/interfaces/global.interface";
import { format_price } from "@/util/formatting.util";
import { Button, Container, Divider } from "@mui/material";
import { getTranslator } from "next-intl/server";

interface Props extends GlobalInterface {
    params:{
        locale: "ar" | "en"
    }
}

const checkout = {
    addresses: [
        {
            id: "1",
            addressId: "2",
            addressName: "Kafr El sheikh",
            country: {
                id: "5151",
                name: {
                    en: "Egypt",
                    ar: "مصر",
                },
            },
            province: {
                id: "5151",
                name: {
                    en: "Egypt",
                    ar: "مصر",
                },
            },
            city: {
                id: "5151",
                name: {
                    en: "Egypt",
                    ar: "مصر",
                },
            },
            street: "dcdcscds",
            building: "jhjjnj",
        },
    ],
};

const cart = {
    total_price: 15000,
    coupon: 0,
};

const CheckoutPage = async ({ params: { locale } }: Props) => {
    const t = await getTranslator(locale);

    return (
        <Container maxWidth="xl" className="space-y-4">
            <section className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {/* Map */}
                <article className="md:col-span-2 col-span-1">
                    <iframe
                        className="rounded-lg shadow-lg h-full min-h-[500px] w-full object-cover"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237145.47103286645!2d38.949293078125!3d21.764852800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c163ba49e7a7d9%3A0xa81c32473be066a7!2sLishlazz!5e0!3m2!1sen!2seg!4v1703080921627!5m2!1sen!2seg"
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </article>
                {/* Addresses aside */}
                <DeliveryAddresses checkout={checkout} locale={locale} />
            </section>
            <OrderSummary t={t}/>
        </Container>
    );
};

export default CheckoutPage;

import React from "react";

interface OrderSummaryProps extends GlobalInterface{

}

const OrderSummary = ({t} :OrderSummaryProps) => {
    return (
        <article className="p-4 shadow-lg space-y-4 shadow-md rounded-lg bg-white">
            <div className="flex justify-between items-center">
                <span className="font-bold">{t!("fields.subtotal")}</span>
                <span className="font-bold">
                    {format_price(cart.total_price)} {t!("fields.price_in_egp")}
                </span>
            </div>
            <div className="flex justify-between items-center">
                <span className="font-bold">{t!("fields.delivery")}</span>
                <span className="font-bold">
                    {format_price(cart.total_price)} {t!("fields.price_in_egp")}
                </span>
            </div>
            <div className="flex justify-between items-center">
                {cart.coupon !== 0 && (
                    <>
                        <span className="font-bold">{t!("fields.coupon")}</span>
                        <span className="font-bold">
                            {format_price(cart.total_price)} {t!("fields.price_in_egp")}
                        </span>
                    </>
                )}
            </div>
            <Divider />
            <div className="flex justify-between items-center">
                <span className="font-bold">{t!("fields.total")}</span>
                <span className="font-bold">
                    {format_price(cart.total_price)} {t!("fields.price_in_egp")}
                </span>
            </div>
            <p className="text-xs italic text-[#fb8d45]">
                {t!("fields.inclusive_of_vats")} {format_price(cart.total_price)} {t!("fields.price_in_egp")}
            </p>
            <Button className="md:w-auto w-full" sx={{ marginInline: "auto", display: "block" }} variant="contained">
                {t!("fields.place_order")}
            </Button>
        </article>
    );
};
