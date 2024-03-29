import "./globals.css";
import "./quill.css";
import "../../components/common/carousels/carousel.css";
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations} from "next-intl/server";
import NavBar from "@/components/navigation/nav-bar";
import FloatingArrowButton from "@/components/common/buttons/floating-arrow.button";
import Footer from "@/components/footer/footer";
import {get_messages} from "@/i18n";
import {ReactNode} from "react";
import ThemeRegistry from "@/components/theme/theme.registry";
import {GlobalSnackbarNotification} from "@/components/common/notifications/global-snackbar.notification";
import {TLocale} from "@/interfaces/global.interface";
import {ProfileRegister} from "@/components/registers/profile.register";
import { NextIntlClientProvider } from "next-intl";

export interface LocaleParams {
    locale: TLocale;
}

export async function build_meta_data(locale: TLocale, routes: string[] = []): Promise<Metadata> {
    const t = await getTranslations();
    routes.push(t("app.name"));
    return {
        title: routes.join(" | "),
        description: t("app.description"),
        keywords: "",
    };
}

interface ParamsType extends LocaleParams {
}

export async function generateMetadata({params: {locale}}: { params: ParamsType }): Promise<Metadata> {
    return await build_meta_data(locale);
}

export default async function RootLayout(
        {
            children,
            params: {locale},
        }: {
            children: ReactNode;
            params: ParamsType;
        }) {

    // const response_data = await get_layout();

    //SETUP LOCALE
    //UNKNOWN LOCALES
    if (locale !== locale) {
        notFound();
    }

    // const token = cookies().get("token")?.value ?? "";

    return (
            <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>

            <body>

            {/*Custom Scripts*/}
            {/*<>*/}
            {/*    {response_data.custom_scripts.heads.map((e) => e)}*/}
            {/*    {response_data.custom_scripts.body.map((e) => e)}*/}
            {/*</>*/}

            {/*Init*/}
            <ProfileRegister/>
            {/*<FavoritesRegister />*/}
            {/*<NotificationsRegister />*/}

            <ThemeRegistry>

                <NextIntlClientProvider locale={locale} messages={await get_messages(locale)}>

                    <NavBar locale={locale}
                            data={
                                {}
                                // response_data.nav_bar
                            }
                    />

                    {children}

                    <FloatingArrowButton/>

                    <Footer locale={locale}/>

                    <GlobalSnackbarNotification locale={locale}/>

                </NextIntlClientProvider>

            </ThemeRegistry>

            </body>

            </html>
    );
}
