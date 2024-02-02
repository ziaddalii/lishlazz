import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import Link from "next/link";
import Image from "next/image";
import OrderNowAR from "@/public/home/order-now-ar.png";
import OrderNowEN from "@/public/home/order-now-en.png";
interface Props extends GlobalInterface {}

export default function HomePickupSection({locale}: Props) {
    return (
        <Box className="col-span-1 rounded-lg" component={Link} href="/menu/favorites">
            <Image className="w-full" src={locale === "ar" ? OrderNowAR : OrderNowEN} alt="order now" />
        </Box>
    );
}
