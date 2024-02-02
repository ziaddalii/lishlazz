"use client";
import {Box} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {CartModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    data: CartModel["extras"];
}

export default function CartGreenSection({}: Props) {

    return (
            <Box component="section">

            </Box>
    );
}
