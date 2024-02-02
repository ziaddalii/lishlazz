import {Box} from "@mui/material";
import {build_meta_data, LocaleParams} from "@/app/[locale]/layout";
import {Metadata} from "next";
import {getTranslator} from "next-intl/server";
import {GlobalInterface} from "@/interfaces/global.interface";
import banner from "@/public/bulk-order/banner.svg";
import meal from "@/public/bulk-order/meal.png";
import illustrations1 from "@/public/bulk-order/people-illustrations.svg";
import illustrations2 from "@/public/bulk-order/people-illustration-2.svg";
import Image from "next/image";

interface Props extends GlobalInterface {
}

export default function BulkOrderTopSection({t}: Props) {

    return (
            <section className="m-0 relative flex justify-center">
                    <Image src={banner} alt="red banner" className="min-w-[1200px]"/>
                    <Image className="absolute bottom-0 left-1/2 translate-y-1/4 -translate-x-1/2" src={meal} alt="combo meal"/>
                    <article className="absolute w-full px-8 font-bold -translate-x-1/2 left-1/2 top-4 text-white text-center space-y-2">
                        <h2 className="md:text-3xl sm:text-2xl italic text-2xl">{t("bulk_orders.celebrate_large")}</h2>
                        <p className="md:text-lg sm:text-base text-sm">{t!("bulk_orders.occasions")}</p>
                        <p className="md:text-lg sm:text-base text-sm">{t!("bulk_orders.choose")}</p>
                    </article>
                <Image className="absolute top-full right-0" src={illustrations1} alt="combo meal"/>
                <Image className="absolute top-full left-0" src={illustrations2} alt="combo meal"/>
            </section>
    );
}
