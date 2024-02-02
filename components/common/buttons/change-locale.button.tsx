"use client";

import Link from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { Button } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function ChangeLocaleButton() {
    //LOCALE
    const current_locale = useLocale();
    const other_locale = current_locale === "en" ? "ar" : "en";
    const t = useTranslations();

    //ROUTE
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const current_url = `${pathname}?${searchParams}`;

    return (
        <Button component={Link} locale={other_locale} href={current_url} variant="outlined">
            {t("fields.language")}
        </Button>
    );
}
