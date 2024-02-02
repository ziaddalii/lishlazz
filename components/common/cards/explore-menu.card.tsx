import { Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExclusiveTicket from "../text/exclusive.text";
import { GlobalInterface } from "@/interfaces/global.interface";

interface Props extends GlobalInterface{
    image:string;
    name:string;
    link:string;
    exclusive?:boolean;
}
const ExploreMenuCard = ({ image, name, link, exclusive, locale }: Props) => {
    return (
        <Card component={Link} href={link}>
            <Image src={image} alt={name} className="aspect-square w-50 pointer-events-none" />
            {
                exclusive
                ?
                <div className="relative h-auto">
                    <ExclusiveTicket locale={locale} label={"Exclusive Offers"}/>
                </div>
                :
                <strong className="text-center text-lg block">{name}</strong>
            }
        </Card>
    );
};

export default ExploreMenuCard;
