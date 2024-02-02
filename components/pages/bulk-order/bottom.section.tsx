import { GlobalInterface } from "@/interfaces/global.interface";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import DiscountIcon from "@mui/icons-material/Discount";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import People1 from "@/public/bulk-order/people.png";
import People2 from "@/public/bulk-order/people-2.png";
import Restaurant from "@/public/bulk-order/restaurant.png";
import Image from "next/image";
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
        <section className="grid md:grid-cols-2 grid-cols-1">
            <article className="col-span-1 relative text-center md:!min-h-[0px] min-h-[500px]">
                <Image className="md:absolute end-0 top-0 md:w-1/2" src={People2} alt={"Restaurant"}/>
                <Image className="md:absolute start-0 top-1/2 md:-translate-y-1/2 md:w-1/2" src={People1} alt={"People in the Restaurant"}/>
                <Image className="md:absolute lg:end-36 end-0 bottom-0 lg:w-1/4 md:w-1/2" src={Restaurant} alt={"People in the Restaurant"}/>
            </article>
            <article className="col-span-1 space-y-4">
                <div>
                    <h2 className="text-2xl font-bold">{t("bulk_orders.introducing")}</h2>
                    <h3 className="text-xl font-bold mb-4">{t("bulk_orders.what_we_offer")}</h3>
                </div>
                {advantages.map((advantage) => {
                    return (
                        <div key={advantage.id} className="flex items-center gap-4">
                            {advantage.icon}
                            <h2 className="font-bold text-lg">{advantage.text}</h2>
                        </div>
                    );
                })}
            </article>
        </section>
    );
}
