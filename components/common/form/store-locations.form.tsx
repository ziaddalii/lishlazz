"use client";
import { Box, Button, InputBase, TextField, alpha, styled } from "@mui/material";
import { z } from "zod";
import { useZod } from "@/hooks/zod.hooks";
import { GlobalInterface } from "@/interfaces/global.interface";
import { getError, hasError, minLengthMsg } from "../validations/util";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BulkOrderFormModel, LoginFormModel, StoreLocationFormModel } from "@/api/interfaces.api";
import { Controller } from "react-hook-form";
import { toggle_loading } from "@/components/common/notifications/global-progress-bar.notification";
import { notify } from "@/components/common/notifications/global-snackbar.notification";
import { scroll_to_top } from "@/components/common/buttons/floating-arrow.button";
import SearchIcon from "@mui/icons-material/Search";
import SortingInput from "../inputs/sorting.inputs";
import { FormSelect } from "./select.form";

interface Props extends GlobalInterface {}

export const default_store_locations_form_values = () => {
    return {};
};

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginInlineEnd: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        // marginLeft: theme.spacing(3),
        width: "auto",
    },
    // border: "1px solid",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    boxSizing: "content-box",
    "& .MuiInputBase-input": {
        // padding: theme.spacing(1, 1, 1, 0),
        height:"48px",
        padding:"0 0 0 1rem",
        // vertical padding + font size from searchIcon
        paddingInlineStart: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

export default function StoreLocationsForm({locale}: Props) {
    const t = useTranslations();

    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (event) => {
        setCityValue(event.target.value as string);
    };
    // Handling Form
    const { errors, onSubmit, control, reset } = useZod<StoreLocationFormModel>(
        {},
        default_store_locations_form_values(),
        async (validated_data: StoreLocationFormModel) => {
            setIsLoading(true);
            await toggle_loading(true);
            scroll_to_top();

            // const result = await post_login({
            //     ...validated_data,
            //     username_or_phone: toLower(validated_data.username_or_phone),
            // }, locale!);

            // if (typeof result === "string") {
            //     notify(true, result);
            // } else {
            //     notify(false, t("fields.operation_completed"));
            //     reset();
            // }

            await toggle_loading(false);
            setIsLoading(false);
        }
    );
    const [cityValue, setCityValue] = useState("");
        const cities ={
            id: "1",
            name: t("placeholders.select_sorting"),
            key: "sort_by",
            options_list: [
                {
                    id: "0",
                    name: t("sorting.sort_default"),
                    value: "0",
                },
                {
                    id: "1",
                    name: t("sorting.sort_price_low_to_high"),
                    value: "1",
                },
                {
                    id: "2",
                    name: t("sorting.sort_price_high_to_low"),
                    value: "2",
                },
            ],
        };
    return (
        <Box className="space-y-8" onSubmit={onSubmit} component="form">
            <div className="flex gap-4 items-center">
                <div className="w-1/2 border">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder={t("fields.search")} inputProps={{ "aria-label": "search" }} />
                    </Search>
                </div>
                <div className="w-1/2">
                    <FormSelect
                        id={cities.id}
                        fullWidth
                        value={cityValue}
                        label={t("fields.city")}
                        placeholder={t("fields.city")}
                        onChange={(e) => handleChange(e)}
                        items={cities.options_list}
                        locale={locale}
                        disabled={isLoading}
                    />
                </div>
            </div>
        </Box>
    );
}
