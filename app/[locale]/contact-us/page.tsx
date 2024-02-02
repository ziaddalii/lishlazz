import { Box, Button, Container, Typography } from "@mui/material";
import { build_meta_data, LocaleParams } from "@/app/[locale]/layout";
import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import { TLocale } from "@/interfaces/global.interface";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
export async function generateMetadata({ params: { locale } }: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslator(locale);
    return build_meta_data(locale, [t("pages.contact-us")]);
}

interface Props {
    params: {
        locale: TLocale;
    };
}

export default async function ContactUsPage({ params: { locale } }: Props) {
    const t = await getTranslator(locale);

    return (
        <Box component="main" className="mt-8">
            <Container maxWidth="md" className="bg-white py-8">
                <Container maxWidth="sm" className="space-y-8">
                    {/*/!*Title*!/*/}
                    {/*<PageTitleText/>*/}
                    <h2 className="font-bold text-2xl text-center">{t("contact.lets_connect")}</h2>

                    {/*Image*/}

                    {/*Description*/}
                    <p className="text-xl text-center">{t("contact.speak_to_real_person")}</p>

                    {/*Subtitle*/}
                    {/*<StaticPageSubtitleText/>*/}
                    <div className="grid grid-cols-3 items-center justify-center">
                        <div className="h-[2px] w-full bg-primary-500"></div>
                        <p className="text-base col-span-1 text-center font-bold">{t("contact.reach_us")}</p>
                        <div className="h-[2px] w-full bg-primary-500"></div>
                    </div>

                    {/*Phone*/}
                    <Button className="shadow-sm flex p-2 !justify-start w-full items-center gap-4 mx-auto text-center" component={Link} href="tel:19019">
                        <PhoneIcon />
                        <span className="text-[#393f52]">
                            19019
                        </span>
                    </Button>
                    {/*Email*/}
                    <Button className="shadow-sm flex p-2 !justify-start w-full items-center gap-4 mx-auto text-center" component={Link} href="mailto:apps@americana-food.com">
                        <EmailIcon color="primary"/>
                        <span className="text-[#393f52]">
                            apps@americana-food.com
                        </span>
                    </Button>
                </Container>
            </Container>
        </Box>
    );
}
