"use client";
import {Box} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {CartModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    with_cutlery: CartModel["other"]["with_cutlery"];
    with_ketchup: CartModel["other"]["with_ketchup"];
}

export default function CartGreenSection({}: Props) {

    return (
            <Box component="section">

            </Box>
    );
}
