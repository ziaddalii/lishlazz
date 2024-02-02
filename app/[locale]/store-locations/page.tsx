import {Box, Container} from "@mui/material";
import {build_meta_data, LocaleParams} from "@/app/[locale]/layout";
import {Metadata} from "next";
import {getTranslator} from "next-intl/server";
import {TLocale} from "@/interfaces/global.interface";
import BranchMap from "@/components/common/maps/branch.map";
import { PageTitleText } from "@/components/common/text/static-page-title.text";
import NearestStoreSection from "@/components/pages/store-locations/nearest-store.section";
import StoreLocationsForm from "@/components/common/form/store-locations.form";

export async function generateMetadata({params: {locale}}: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslator(locale);
    return build_meta_data(locale, [t("pages.store_locations")]);
}

interface Props {
    params: {
        locale: TLocale;
    };
}


export default async function StoreLocationsPage({params: {locale}}: Props) {

    const t = await getTranslator(locale);

    // const {
    //     cities,
    //     branches,
    // } = store_locations_data;

    return (
            <Box component="main">

                <Container maxWidth="xl" component="section">
                    {/*Search / Cities*/}
                    <PageTitleText title={t("fields.find_a_nearby_lishlazz")}/>
                    <NearestStoreSection locale={locale}/>
                </Container>
            </Box>
    );
}
