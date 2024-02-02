import MealCard from "@/components/common/cards/meal.card";
import {Box} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {HomeModel} from "@/api/interfaces.api";
import HomeHeaderMoreSection from "@/components/pages/home/header-more.section";
import { SlidesPerviewCarousel } from "@/components/common/carousels/images.carousel";
import ExploreMenuCard from "@/components/common/cards/explore-menu.card";

interface Props extends GlobalInterface {
    data: HomeModel["best_sellers"]
}

export default function HomeBestSellersSection({locale, data, t}: Props) {

    return (
            <Box component="section" className="space-y-2">

                {/*Header*/}
                <HomeHeaderMoreSection label={t!("fields.best_sellers")} icon="" t={t} locale={locale} />
            <SlidesPerviewCarousel
                slidesPerView={{main:1, lg:4, md:3, sm:2}}
                spaceBetween={{ main: 20 }}
                slides={data.map((e, index) => (
                    <ExploreMenuCard
                        locale={locale}
                        key={e.id}
                        exclusive={e.exclusive}
                        image={e.photo_url}
                        name={e.names[locale!]}
                        link={`/${e.id}/${e.names.en}`}
                    />
                ))}
            ></SlidesPerviewCarousel>

            </Box>
    );
}
