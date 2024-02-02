import Image from "next/image";
import StoreImg from "@/public/icons/store.png";
import { Button, Card, Divider } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
const StoreCard = ({store, locale}) => {
    const t = useTranslations();
    return (
        <Card variant="outlined" className="shadow-sm p-4 space-y-2">
            <div className="grid grid-cols-5 justify-center items-center gap-4">
                <div className="col-span-1">
                    <Image className="w-full" src={StoreImg} alt="store icon" />
                </div>
                <div className="col-span-4 space-y-1">
                    <h2 className="font-bold">{store.branch[locale!]}</h2>
                    <p className="text-sm">{store.address[locale!]}</p>
                    <p className="font-bold text-sm">{store.open_at[locale!]}</p>
                </div>
            </div>
            <Divider/>
            <div className="flex justify-between items-center">
                <Button variant="contained">{t("fields.place_order")}</Button>
                <Button component={Link} href={`/store-locations/${store.id}`} size="medium" color="secondary">{t("fields.view_details")}</Button>
            </div>
        </Card>
    );
};

export default StoreCard;
