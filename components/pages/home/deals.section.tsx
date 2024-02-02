import MealCard from "@/components/common/cards/meal.card";
import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import { HomeModel } from "@/api/interfaces.api";
import HomeHeaderMoreSection from "@/components/pages/home/header-more.section";
import MenuCard from "@/components/common/cards/MenuCard";
import { SlidesPerviewCarousel } from "@/components/common/carousels/images.carousel";

interface Props extends GlobalInterface {
    data: HomeModel["deals"];
}

export default async function HomeDealsSection({ locale, data, t }: Props) {
    return (
        <Box component="section" className="space-y-2">
            {/* Header */}
            <HomeHeaderMoreSection label={t!("fields.top_deals")} link="/deals" icon="" t={t} locale={locale} />

            <SlidesPerviewCarousel
                slidesPerView={{ main: 1, lg: 4, md: 3, sm: 2 }}
                spaceBetween={{ main: 20 }}
                slides={data.map((e) => (
                    <MenuCard
                        data={e}
                        key={e.id}
                        img={e.photo_url}
                        id={e.id}
                        name={e.name}
                        names={e.names}
                        description={e.description}
                        descriptions={e.descriptions}
                        card_url={"#"}
                        prices={e.prices}
                        status={e.status}
                        locale={locale}
                        t={t}
                    />
                ))}
            ></SlidesPerviewCarousel>
        </Box>
    );
}
