"use client";
import { Box, Button, TextField, Container, styled, IconButton, Dialog } from "@mui/material";
import { z } from "zod";
import { useZod } from "@/hooks/zod.hooks";
import { GlobalInterface } from "@/interfaces/global.interface";
import { getError, hasError, minLengthMsg } from "../validations/util";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BulkOrderFormModel, LoginFormModel } from "@/api/interfaces.api";
import { Controller } from "react-hook-form";
import { toggle_loading } from "@/components/common/notifications/global-progress-bar.notification";
import { notify } from "@/components/common/notifications/global-snackbar.notification";
import { scroll_to_top } from "@/components/common/buttons/floating-arrow.button";
import { FormSelect } from "@/components/common/form/select.form";
import { zPhoneNumber } from "@/components/common/validations/phone";
import { SectionLabelText } from "@/components/common/text/section-label.text";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";
import { DateTimePickerToolbar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import EventIcon from "@mui/icons-material/Event";
import theme from "@/components/theme/theme";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

interface Props extends GlobalInterface {}

export const default_bulk_order_form_values = () => {
    return {};
};

const StyledButton = styled(IconButton)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
}));

const CustomToolbar = styled(DateTimePickerToolbar)(({ theme }) => ({
    "& .MuiTypography-root": {
        fontSize: "1.5rem!important",
    },
    "& .MuiTypography-subtitle2": {
        fontSize: "10px!important",
    },
    "& .MuiTypography-subtitle1": {
        fontSize: "10px!important",
    },
    "& .mui-pffy7i-MuiTypography-root": {
        display: "none!important",
    },
}));

const CustomDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
        height: "550px",
        margin:"0",
    },
}));


export default function BulkOrderForm({}: Props) {
    const t = useTranslations();

    const [isLoading, setIsLoading] = useState(false);

    // Handling Form
    const { errors, onSubmit, control, reset } = useZod<BulkOrderFormModel>(
        {
            name: z.string().min(3, minLengthMsg(3, "fields.name", t)),
            phone_number: zPhoneNumber("fields.phone", t),
            email: z.string().min(3, minLengthMsg(3, "fields.email", t)).email(),
            organization_name: z.string().min(3, minLengthMsg(3, "fields.name", t)),
            address_line_1: z.string().min(3, minLengthMsg(3, "fields.name", t)),
            address_line_2: z.string().min(3, minLengthMsg(3, "fields.name", t)),
            city: z.string().min(1, minLengthMsg(1, "fields.city", t)),

            // country: z.number().min(1, minLengthMsg(1, "fields.country", t)),
            // province: z.number().min(1, minLengthMsg(1, "fields.province", t)),
            // address: z.string().min(3, minLengthMsg(3, "fields.address", t)),
            // street: z.string().min(3, minLengthMsg(1, "fields.street", t)),
            // floor: z.string().min(1, minLengthMsg(1, "fields.floor", t)),
            // building: z.string().min(1, minLengthMsg(1, "fields.building", t)),
            // landmark: z.string().min(3, minLengthMsg(3, "fields.landmark", t)),
        },
        default_bulk_order_form_values(),
        async (validated_data: BulkOrderFormModel) => {
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

    const cities_list = [
        {
            id: "1",
            value: "1",
            name: "Mansoura",
        },
    ];
    return (
        <Container
            maxWidth="sm"
            sx={{ marginTop: "-4.5rem" }}
            className="p-4 shadow-lg z-10 relative space-y-8 bg-white rounded-lg"
            onSubmit={onSubmit}
            component="form"
        >
            <h2 className="text-center w-3/4 mx-auto text-xl font-bold">{t("bulk_orders.send_enquiry")}</h2>
            <SectionLabelText label={t("bulk_orders.personal_organization")} />
            <div className="grid md:md:grid-cols-2 grid-cols-1 gap-4">
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="name"
                            type="text"
                            label={t("fields.name")}
                            title={t("fields.name")}
                            placeholder={t("placeholders.enter_name")}
                            error={hasError(errors, "name")}
                            helperText={getError(errors, "name")}
                            disabled={isLoading}
                        />
                    )}
                />
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="phone"
                            type="text"
                            label={t("fields.phone")}
                            title={t("fields.phone")}
                            placeholder={t("placeholders.enter_phone")}
                            error={hasError(errors, "phone")}
                            helperText={getError(errors, "phone")}
                            disabled={isLoading}
                        />
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="email"
                            type="text"
                            label={t("fields.email")}
                            title={t("fields.email")}
                            placeholder={t("placeholders.enter_email")}
                            error={hasError(errors, "email")}
                            helperText={getError(errors, "email")}
                            disabled={isLoading}
                        />
                    )}
                />
                <Controller
                    name="organization_name"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="organization_name"
                            type="text"
                            label={t("bulk_orders.organization_name")}
                            title={t("bulk_orders.organization_name")}
                            placeholder={t("placeholders.enter_organization_name")}
                            error={hasError(errors, "organization_name")}
                            helperText={getError(errors, "organization_name")}
                            disabled={isLoading}
                        />
                    )}
                />
                <Controller
                    name="address_line_1"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="address_line_1"
                            type="text"
                            label={t("bulk_orders.address_line_1")}
                            title={t("bulk_orders.address_line_1")}
                            placeholder={t("placeholders.enter_address_line_1")}
                            error={hasError(errors, "address_line_1")}
                            helperText={getError(errors, "address_line_1")}
                            disabled={isLoading}
                        />
                    )}
                />
                <Controller
                    name="address_line_2"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="address_line_1"
                            type="text"
                            label={t("bulk_orders.address_line_2")}
                            title={t("bulk_orders.address_line_2")}
                            placeholder={t("placeholders.enter_address_line_2")}
                            error={hasError(errors, "address_line_2")}
                            helperText={getError(errors, "address_line_2")}
                            disabled={isLoading}
                        />
                    )}
                />
                <Controller
                    name="city"
                    control={control}
                    render={({ field }) => (
                        <FormSelect<string>
                            id="cities"
                            field={field}
                            fullWidth
                            label={t("fields.city")}
                            placeholder={t("fields.city")}
                            items={cities_list}
                            variant="filled"
                            disabled={isLoading}
                        />
                    )}
                />
            </div>
            <SectionLabelText label={t("bulk_orders.personal_organization")} />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                        <MobileDateTimePicker
                            label={t("bulk_orders.order_data_time")}
                            slots={{
                                openPickerIcon: EventIcon,
                                openPickerButton: StyledButton,
                                // textField: CustomTextField,
                                // day: StyledDay,
                                toolbar: CustomToolbar,
                                dialog: CustomDialog,
                            }}
                            slotProps={{
                                openPickerButton: { color: "secondary" },
                                textField: {
                                    size: "small",
                                    variant: "filled",
                                },
                            }}
                            mobileTransition={{
                                fontSize: "8px",
                            }}
                            defaultValue={dayjs("2022-04-17T15:30")}
                        />
                    </DemoItem>
                </LocalizationProvider>
                <Controller
                    name="no_of_people"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="no_of_people"
                            type="text"
                            label={t("bulk_orders.no_of_people")}
                            title={t("bulk_orders.no_of_people")}
                            placeholder={t("placeholders.enter_no_of_people")}
                            error={hasError(errors, "no_of_people")}
                            helperText={getError(errors, "no_of_people")}
                            disabled={isLoading}
                        />
                    )}
                />

                <Controller
                    name="query"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            size="small"
                            variant="filled"
                            fullWidth
                            id="query"
                            type="text"
                            label={t("bulk_orders.query")}
                            title={t("bulk_orders.query")}
                            placeholder={t("placeholders.enter_query")}
                            error={hasError(errors, "query")}
                            helperText={getError(errors, "query")}
                            disabled={isLoading}
                        />
                    )}
                />
            </div>
            <Button className="sm:w-auto w-full" disabled={isLoading} type="submit" variant="contained" sx={{ color: "white" }}>
                {t("fields.submit")}
            </Button>
        </Container>
    );
}
