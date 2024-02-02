"use client";
import { Box, Container, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import FrontCar from "@/public/product-details/front.webp";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import CartLocationForm from "./cart-location";

const DeliveryAddresses = ({checkout, locale }) => {
    const [selectedValue, setSelectedValue] = useState(checkout.addresses[0].addressId); // Default selected value

    const [disabled, setDisabled] = useState<boolean>();
    const t = useTranslations();

    useEffect(() => {
        // Check if the "other address" option is selected and set disabled accordingly
        if (selectedValue === "other") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [selectedValue]);

    return (
        <div className="col-span-1 bg-white rounded-lg shadow-lg">
            <h2 className="bg-blue-50 font-bold text-lg p-4">
                {t("fields.address")}
            </h2>
        <article className=" p-4 space-y-4 ">
            <FormControl>
                <RadioGroup
                    onChange={() => { setSelectedValue(event.target.value) }}
                    // value={selectedValue}
                    className="space-y-2"
                    aria-labelledby="address group"
                    defaultValue={checkout.addresses[0].addressId}
                    name="address group"
                >
                    {checkout.addresses.map((address) => {
                        return (
                            <div key={address.id}>
                                <FormControlLabel value={address.addressId} control={<Radio />} label={address.addressName} />
                                <p className="font-light text-xs">
                                    {address.country.name[locale!]} / {address.province.name[locale!]} / {address.city.name[locale!]} / {address.street} / {address.building}
                                </p>
                            </div>
                        );
                    })}
                    <div>
                        <FormControlLabel value="other" control={<Radio />} label={t("fields.other_address")} />
                    </div>
                </RadioGroup>
            </FormControl>
            <Divider />
            <CartLocationForm disabled={disabled} />
        </article>
        </div>
    );
};

export default DeliveryAddresses;
