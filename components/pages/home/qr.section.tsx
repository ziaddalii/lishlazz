import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import Link from "next/link";
import Image from "next/image";
import ScanCodeAR from "@/public/home/scan-code-ar.png";
import ScanCodeEN from "@/public/home/scan-code-en.png";
interface Props extends GlobalInterface {}

export default function HomeQrSection({locale}: Props) {
    return (
        <Box className="col-span-1 rounded-lg" component={Link} href="/menu/favorites">
            <Image className="w-full" src={locale === "ar" ? ScanCodeAR : ScanCodeEN} alt="order now" />
        </Box>
    );
}