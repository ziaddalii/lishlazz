import { Box, Container } from "@mui/material";
import { build_meta_data, LocaleParams } from "@/app/[locale]/layout";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TLocale } from "@/interfaces/global.interface";
import BulkOrderTopSection from "@/components/pages/bulk-order/top.section";
import BulkOrderBottomSection from "@/components/pages/bulk-order/bottom.section";
import BulkOrderForm from "@/components/common/form/bulk-order.form";

export async function generateMetadata({ params: { locale } }: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslations();
    return build_meta_data(locale, [t("pages.bulk_order")]);
}

interface Props {
    params: {
        locale: TLocale;
    };
}

export default async function BulkOrderPage({ params: { locale } }: Props) {
    const t = await getTranslations();

    return (
        <Box component="main" sx={{overflow:"hidden"}}>
            {/*Top Section (Banner)*/}
                <BulkOrderTopSection t={t}/>
            <Container maxWidth="xl" className="relative">
                {/*Form*/}
                <BulkOrderForm />
                {/*Bottom Section*/}
                <BulkOrderBottomSection t={t}/>
            </Container>
        </Box>
    );
}
