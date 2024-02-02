import { Box } from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import ViewAllButton from "@/components/common/buttons/view-all.button";
import { SectionLabelText } from "@/components/common/text/section-label.text";

interface Props extends GlobalInterface {
    label: string;
    icon?: string;
    link?: string;
}

export default function HomeHeaderMoreSection({ label, icon, link, t, locale }: Props) {
    return (
        <Box className="flex justify-between items-center mb-3">
            <SectionLabelText label={label} icon={icon} />

            {link && <ViewAllButton locale={locale} label={label} link={link} />}
        </Box>
    );
}
