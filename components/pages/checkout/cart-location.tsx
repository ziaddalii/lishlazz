"use client";

import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { useZod } from "@/hooks/zod.hooks";
import { zPhoto } from "../validations/photo";
import { z } from "zod";
import { useEffect, useState } from "react";
import { isString } from "lodash-es";
import { toggle_loading } from "@/components/common/notifications/global-progress-bar.notification";
import { hasError, minLengthMsg } from "@/components/common/validations/util";
import { getError } from "@/components/common/validations/util";
import { useTranslations } from "next-intl";
import { FormSelect } from "@/components/common/form/select.form";
import { notify } from "@/components/common/notifications/global-snackbar.notification";

const countries = [
    {
        id: "1",
        value: "1",
        name: "Egypt",
    },
];

const provinces = [
    {
        id: "515151",
        value: "515151",
        name: "Cairo",
        country:{
            id: "1",
            value: "Egypt",
            name: "Egypt",
        },
    },
    {
        id: "215454",
        value: "215454",
        name: "Alexandria",
        country:{
            id: "1",
            value: "Egypt",
            name: "Egypt",
        },
    },
    {
        id: "4845111",
        value: "4845111",
        name: "Dakahliya",
        country:{
            id: "1",
            value: "Egypt",
            name: "Egypt",
        },
    },

];

const cities = [
    {
        id: "55151",
        value: "55151",
        name: "Mit Ghamr",
        province:{
            id: "4845111",
            value: "Dakahliya",
            name: "Dakahliya",
        },
    },
    {
        id: "8545151",
        value: "8545151",
        name: "Mansoura",
        province:{
            id: "4845111",
            value: "Dakahliya",
            name: "Dakahliya",
        },
    },
    {
        id: "4515",
        value: "4515",
        name: "Alex",
        province:{
            id: "215454",
            value: "Alexandria",
            name: "Alexandria",
        },
    },
    {
        id: "8545151",
        value: "8545151",
        name: "Shoubra",
        province:{
            id: "515151",
            value: "Cairo",
            name: "Cairo",
        },
    },

];

const CartLocationForm = ({locations, disabled}: Props) => {
    const t = useTranslations();
    const [isLoading, setIsLoading] = useState(false);

    const { errors, onSubmit, control, reset, getValues, watch } = useZod<PersonalInfoForm>(
        {
            country: z.string().min(3, minLengthMsg(3, "fields.country", t)),
            province: z.string().min(3, minLengthMsg(3, "fields.province", t)),
            city: z.string().min(3, minLengthMsg(3, "fields.city", t)),
            address: z.string().min(3, minLengthMsg(3, "checkout.address", t)),
            street: z.string().min(3, minLengthMsg(3, "checkout.street", t)),
            floor: z.string().min(3, minLengthMsg(3, "checkout.floor", t)),
            building: z.string().min(3, minLengthMsg(3, "checkout.building", t)),
            landmark: z.string().min(3, minLengthMsg(3, "checkout.landmark", t)),
        },
        {
            country: "",
            province: "",
            city: "",
            address: "",
            street: "",
            floor: "",
            building: "",
            landmark: "",
        },
        async (validatedData: PersonalInfoForm) => {
            setIsLoading(true);

            await toggle_loading(true);

            // scroll_to_top();

            // const result = await post_update_checkout(build_form_data(validatedData, original_personal_info), locale!);

            if (isString(result)) {
                notify(true, result);
            } else {
                notify(false, t("fields.operation_completed"));
                setTimeout(() => {
                    // navigate.replace("/auth/account");
                    // reset();
                    window.location.replace("/auth/account");
                }, 1000);
            }

            await toggle_loading(false);

            setIsLoading(false);
        }
    );
    const [countries_list, set_countries_list] = useState<ProvinceData[]>(countries);

    const [provinces_list, set_provinces_list] = useState<ProvinceData[]>([]);

    const [cities_list, set_cities_list] = useState<CityData[]>([]);
    useEffect(() => {
        const country = getValues("country");

        const filtered_provinces = provinces.filter((province) => province.country?.id === country);

        set_provinces_list(filtered_provinces);
    }, [watch("country")]);

    useEffect(() => {
        const province = getValues("province");

        const filtered_cities = cities.filter((city) => city.province?.id === province);

        set_cities_list(filtered_cities);
    }, [watch("province")]);

    return (
        <form className="!py-4 space-y-2">
            <Controller
                name="country"
                control={control}
                render={({ field }) => (
                    <FormSelect<string>
                        id={"country"}
                        field={field}
                        fullWidth
                        label={t("fields.country")}
                        placeholder={t("fields.country")}
                        items={countries_list}
                        variant="filled"
                        disabled={disabled}
                    />
                )}
            />
            <Controller
                name="province"
                control={control}
                render={({ field }) => (
                    <FormSelect<string>
                        id={"province"}
                        field={field}
                        fullWidth
                        label={t("fields.province")}
                        placeholder={t("fields.province")}
                        items={provinces_list}
                        variant="filled"
                        disabled={disabled}
                    />
                )}
            />
            <Controller
                name="city"
                control={control}
                render={({ field }) => (
                    <FormSelect<string>
                        id={"cities"}
                        field={field}
                        fullWidth
                        label={t("fields.city")}
                        placeholder={t("fields.city")}
                        items={cities_list}
                        variant="filled"
                        disabled={disabled}
                    />
                )}
            />
            <Controller
                name="address"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="filled"
                        margin="dense"
                        fullWidth
                        id="address"
                        type="text"
                        label={t("checkout.address")}
                        title={t("checkout.address")}
                        placeholder={t("placeholders.enter_address")}
                        error={hasError(errors, "address")}
                        helperText={getError(errors, "address")}
                        disabled={disabled}
                    />
                )}
            />
            <Controller
                name="street"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="filled"
                        margin="dense"
                        fullWidth
                        id="street"
                        type="text"
                        label={t("checkout.street")}
                        title={t("checkout.street")}
                        placeholder={t("placeholders.enter_street")}
                        error={hasError(errors, "street")}
                        helperText={getError(errors, "street")}
                        disabled={disabled}
                    />
                )}
            />

            <Controller
                name="building"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="filled"
                        margin="dense"
                        fullWidth
                        id="building"
                        type="text"
                        label={t("checkout.building")}
                        title={t("checkout.building")}
                        placeholder={t("placeholders.enter_building")}
                        error={hasError(errors, "building")}
                        helperText={getError(errors, "building")}
                        disabled={disabled}
                    />
                )}
            />

            <Controller
                name="floor"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="filled"
                        margin="dense"
                        fullWidth
                        id="floor"
                        type="text"
                        label={t("checkout.floor")}
                        title={t("checkout.floor")}
                        placeholder={t("placeholders.enter_floor")}
                        error={hasError(errors, "floor")}
                        helperText={getError(errors, "floor")}
                        disabled={disabled}
                    />
                )}
            />

            <Controller
                name="landmark"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        variant="filled"
                        margin="dense"
                        fullWidth
                        id="landmark"
                        type="text"
                        label={t("checkout.landmark")}
                        title={t("checkout.landmark")}
                        placeholder={t("placeholders.enter_landmark")}
                        error={hasError(errors, "landmark")}
                        helperText={getError(errors, "landmark")}
                        disabled={disabled}
                    />
                )}
            />
        </form>
    );
};

export default CartLocationForm;
