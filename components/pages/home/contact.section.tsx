import MealCard from "@/components/common/cards/meal.card";
import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import { HomeModel } from "@/api/interfaces.api";
import HomeHeaderMoreSection from "@/components/pages/home/header-more.section";
import Image from "next/image";
import { SlidesPerviewCarousel } from "@/components/common/carousels/images.carousel";
import Priority from "@/public/home/safety/priority.png";
import Sanitize from "@/public/home/safety/sanitize.png";
import Mask from "@/public/home/safety/mask.png";
import BagsSanitize from "@/public/home/safety/bags-sanitized.png";
import Tape from "@/public/home/safety/tape.png";
interface Props extends GlobalInterface {}

export default async function HomeSafetySection({ t }: Props) {
    const contact_list = [];
    const safety_data = [
        {
            id:"2",
            photo_url:Sanitize,
            text: t!("safety.sanitize"),
        },
        {
            id:"3",
            photo_url:Mask,
            text: t!("safety.mask"),
        },
        {
            id:"4",
            photo_url:BagsSanitize,
            text: t!("safety.bags"),
        },
        {
            id:"5",
            photo_url:Tape,
            text: t!("safety.tape"),
        },
    ];
    return (
        <Box component="section" className="space-y-2">
            {/*Header*/}
            <HomeHeaderMoreSection label={t!("safety.contactless_delivery")} />

            <div className="grid lg:grid-cols-6 grid-cols-4 items-center lg:justify-start justify-center gap-4">
                <Image className="lg:col-span-2 col-span-4 object-contain" src={Priority} alt="your safety is out top priority"/>
                {/* Safety Card*/}
                <div className="grid col-span-4 sm:grid-cols-4 grid-cols-2 gap-4 h-full items-center">
                    {safety_data.map((e) => (
                        <div key={e.id} className="h-full sm:p-4 p-2 box-border flex justify-center items-center col-span-1 bg-white text-center">
                            <div className="">
                                <Image className="mx-auto w-[3.75rem]" src={e.photo_url} alt={e.text}/>
                                <p className="md:text-base text-sm">{e.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <SlidesPerviewCarousel
                slidesPerView={{main:2, lg:6, md:5, sm:4}}
                spaceBetween={{ main: 16 }}
                slides={safety_data.map((e) => (
                    <div key={e.id} className="aspect-square flex justify-center items-center h-[146px] bg-white text-center">
                        <div className="">
                            <Image className="mx-auto w-[3.75rem]" src={e.photo_url} alt={e.text}/>
                            <p>{e.text}</p>
                        </div>
                    </div>
                ))}
            ></SlidesPerviewCarousel> */}
                {/* Contact Cards */}
                {/* {contact_list.map((e) => (
                    <MealCard
                        key={e.id}
                        id={e.id}
                        name={e.names[locale]}
                        names={e.names}
                        card_url={e.card_url}
                        price={e.price}
                        duration={e.created_at}
                        categories={e.categories}
                        comments={e.comments}
                        created_at={e.created_at}
                        description={e.description}
                        descriptions={e.descriptions}
                        extras={e.extras}
                        location={e.location}
                        order={e.order}
                        photos={e.photos}
                        seller={e.seller}
                        seo_tags={e.seo_tags}
                        status={e.status}
                        state={e.state}
                        locale={locale}
                        t={t}
                    />
                ))} */}
            </div>
        </Box>
    );
}
