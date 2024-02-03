import {Box, Container} from "@mui/material";
import Link from "next/link";
import {build_meta_data, LocaleParams} from "@/app/[locale]/layout";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {ThirdPartyRegisterSection} from "@/components/pages/auth/third-party-register.section";
// import {RegisterFormSection} from "@/components/pages/auth/register-form.section";
import {GlobalInterface, TLocale} from "@/interfaces/global.interface";
import {SelectModel} from "@/components/common/form/select.form";

export async function generateMetadata({ params: { locale } }: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslations();
    return build_meta_data(locale, [t("pages.register")]);
}

interface TitleDescriptionSectionProps extends GlobalInterface {}

interface Props {
    params: {
        locale: TLocale;
    };
}

export interface ProvinceData extends SelectModel {
    country: { id: string };
}

export interface CityData extends SelectModel {
    province: { id: string };
}

export default async function RegisterPage({ params: { locale } }: Props) {
    const t = await getTranslations();

    // const { ad_sense, locations } = await get_register();

    // const countries_data = locations.countries.map((region) => {
    //     return {
    //         id: region.id,
    //         name: region.names[locale!],
    //         value: region.id,
    //     };
    // });

    // const provinces_data = locations.provinces.map((province) => {
    //     return {
    //         id: province.id,
    //         name: province.names[locale!],
    //         value: province.id,
    //         country: province.country,
    //     };
    // });

    // const cities_data = locations.cities.map((city) => {
    //     return {
    //         id: city.id,
    //         name: city.names[locale!],
    //         value: city.id,
    //         province: city.province,
    //     };
    // });

    return (
        <Box component="main">
            {/*Nav Header*/}

            <Container maxWidth="xl" className="!bg-secondary-100 p-4 space-y-8">
                {/*Title / Description Section*/}
                <TitleDescriptionSection t={t} />

                {/*Third Party Register Buttons*/}
                <ThirdPartyRegisterSection t={t} />
            </Container>

            <Container maxWidth="xl" className="!bg-secondary-100 p-4 space-y-8">
                {/*Register Form*/}
            </Container>

            {/*Adsense Space*/}
            <Container maxWidth="xl">

            </Container>
        </Box>
    );
}

function TitleDescriptionSection({ t }: TitleDescriptionSectionProps) {
    return (
        <Box component="section" className="space-y-2">
            <p className="font-bold">{t!("register.register_account")}</p>

            <p>
                {t!("register.if_you_have_an_account")}
                <Link href="/auth/login" className="link-primary font-semibold mx-1">
                    {t!("register.login_page")}
                </Link>
            </p>
        </Box>
    );
}
