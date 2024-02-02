import Exclusive from "@/public/exclusive.png";
import Image from "next/image";
import { GlobalInterface } from "@/interfaces/global.interface";

interface Props extends GlobalInterface {
    label: string;
}
const ExclusiveTicket = ({ label, locale }: Props) => {
    return (
        <>
            <Image className="w-full" alt="exclusive" src={Exclusive} />
            <strong
                className={`absolute start-[50%] ${
                    locale === "en" ? "translate-x-[-50%]" : "translate-x-[50%]"
                } translate-y-[-50%] top-[50%] text-center text-white  sm:text-xs md:text-base`}
            >
                {label}
            </strong>
        </>
    );
};

export default ExclusiveTicket;
