"use client";
import {Box} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {CartModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    optional_instruction: CartModel["other"]["optional_instructions"];
}

export default function CartOptionalInstructionsSection({}: Props) {

    return (
            <Box component="section">

            </Box>
    );
}
