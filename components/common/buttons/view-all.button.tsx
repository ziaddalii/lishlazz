import { Button } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslations } from "next-intl";
import Link from "next/link";
interface Props extends GlobalInterface {
    link:string;
}

export default function ViewAllButton({ locale, link }: Props) {    
    const t = useTranslations();
    return (
        <Button
            component={Link}
            href="#"
            color="secondary"
            sx={{
                display: "flex",
                gap: ".25rem",
            }}
        >
            {t!("fields.view_all")}
            {locale === "ar" ? (
                <ArrowBackIcon fontSize="small" className="border rounded-md border-[#007AFF]" />
            ) : (
                <ArrowForwardIcon fontSize="small" className="border rounded-md border-[#007AFF]" />
            )}
        </Button>
    );
}
