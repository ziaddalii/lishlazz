import { Box } from "@mui/material";
import { build_meta_data, LocaleParams } from "@/app/[locale]/layout";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { GlobalInterface } from "@/interfaces/global.interface";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import DiscountIcon from "@mui/icons-material/Discount";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
interface Props extends GlobalInterface {
    data: {
        icon: string;
        name: string;
    }[];
}

export default function BulkOrderBottomSection({ data, t }: Props) {
    const advantages = [
        {
            id: "1",
            text: t("bulk_orders.gathering"),
            icon: <ShoppingCartIcon fontSize="large" color="primary" />,
        },
        {
            id: "2",
            text: t("bulk_orders.delivery"),
            icon: <AccessTimeIcon fontSize="large" color="primary" />,
        },
        {
            id: "3",
            text: t("bulk_orders.packaging"),
            icon: <TakeoutDiningIcon fontSize="large" color="primary" />,
        },
        {
            id: "4",
            text: t("bulk_orders.discounts"),
            icon: <DiscountIcon fontSize="large" color="primary" />,
        },
        {
            id: "5",
            text: t("bulk_orders.future_date"),
            icon: <ManageHistoryIcon fontSize="large" color="primary" />,
        },
    ];
    return (
        <section className="grid grid-cols-2 relative">
            <article className="col-span-1">
                {advantages.map((advantage) => {
                    return (
                        <div key={advantage.id} className="flex items-center gap-4">
                            {advantage.icon}
                            <h2 className="font-bold text-sm">{advantage.text}</h2>
                        </div>
                    );
                })}
            </article>
            <article className="col-span-1">
                <h2 className="text-xl font-bold">{t("bulk_orders.introducing")}</h2>
                <h3 className="text-lg font-bold">{t("bulk_orders.what_we_offer")}</h3>
                {advantages.map((advantage) => {
                    return (
                        <div key={advantage.id} className="flex items-center gap-4">
                            {advantage.icon}
                            <h2 className="font-bold text-sm">{advantage.text}</h2>
                        </div>
                    );
                })}
            </article>
        </section>
    );
}
