import {Box, Card} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import Image from "next/image";
import Link from "next/link";
import FavoritesAR from "@/public/home/favorites-ar.png";
import FavoritesEN from "@/public/home/favorites-en.png";


interface Props extends GlobalInterface {
}

export default function HomeFavoritesSection({locale}: Props) {

    return (
        <Box className="col-span-1" component={Link} href="/menu/favorites">
            <Image src={locale === "ar" ? FavoritesAR : FavoritesEN} alt="favorites"/>
        </Box>
    );
}
