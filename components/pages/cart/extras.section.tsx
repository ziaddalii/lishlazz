"use client";
import {Box, Card} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {CartModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    summary: CartModel["summary"];
}

export default function CartSummarySection({summary}: Props) {
    const {} = summary;

    return (
            <Card component="section">

            </Card>
    );
}
