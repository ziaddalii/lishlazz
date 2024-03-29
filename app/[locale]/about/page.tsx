import {Box, Container} from "@mui/material";
import {build_meta_data, LocaleParams} from "@/app/[locale]/layout";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {TLocale} from "@/interfaces/global.interface";
import {PageTitleText} from "@/components/common/text/static-page-title.text";

export async function generateMetadata({params: {locale}}: { params: LocaleParams }): Promise<Metadata> {
    const t = await getTranslations();
    return build_meta_data(locale, [t("pages.about")]);
}

interface Props {
    params: {
        locale: TLocale;
    };
}


export default async function AboutPage({params: {locale}}: Props) {

    const t = await getTranslations();

    // const {
    //     content,
    // } = about_data;

    return (
        <Box component="main">

        <Container maxWidth="lg" className="space-y-8">


            <Container maxWidth="md" >
                {/*/!*Title*!/*/}
                <PageTitleText title={t("pages.about")}/>
                {/*Content*/}
                <section className="bg-white p-4 rounded-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod natus blanditiis rem itaque, reiciendis optio? Eos, molestiae autem eaque reprehenderit, veniam inventore placeat modi animi soluta architecto exercitationem, ullam impedit?
                </section>
            </Container>
            {/*content[locale]*/}
        </Container>

    </Box>
    );
}
