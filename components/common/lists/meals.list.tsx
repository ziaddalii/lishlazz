import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import { MealModel } from "@/api/interfaces.api";
import MenuCard from "@/components/common/cards/MenuCard";

interface Props extends GlobalInterface {
    data: MealModel[];
}

export default function MealsListSection({ data, locale, t }: Props) {
    return (
        <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {data.map((item) => (
                    <MenuCard
                        data={item}
                        key={item.id}
                        img={item.photo_url}
                        id={item.id}
                        name={item.name}
                        names={item.names}
                        description={item.description}
                        descriptions={item.descriptions}
                        card_url={"#"}
                        prices={item.prices}
                        status={item.status}
                        locale={locale}
                        t={t}
                    />
                ))}
        </section>
    );
}
