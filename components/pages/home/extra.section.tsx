import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import Link from "next/link";
import Image from "next/image";
import ExploreMenu from "@/public/home/explore-menu.svg";
import NeonButton from "@/components/common/buttons/neon.button";
interface Props extends GlobalInterface {}

export default function HomeExtraSection({locale, t}: Props) {
    return (
        <Box className="col-span-1 rounded-lg p-4 space-y-4 bg-white">
            <Image className="mx-auto" src={ExploreMenu} alt="explore menu" />
            <h2 className="font-bold text-center text-xl">{t!("fields.explore_menu_card_text")}</h2>
            <div className="text-center">
                <NeonButton>{t!("fields.explore_menu")}</NeonButton>
            </div>
        </Box>
    );
}
