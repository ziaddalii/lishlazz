"use client";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    IconButton,
    Typography,
} from "@mui/material";
import { GlobalInterface } from "@/interfaces/global.interface";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import theme from "@/components/theme/theme";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { format_price } from "@/util/formatting.util";
interface Props extends GlobalInterface {}

export default function CartCard({ cart_item, locale }: Props) {
    const t = useTranslations();

    const increase_qunatity = async (current_quantity) => {
        const body = {
            cartable_id: cart_item.cartable_id,
            quantity: current_quantity + 1,
        };
        const result = await patch_update_cart(body, locale);
        if (result.success) {
            notify(false, t("fields.operation_completed"));
        } else {
            notify(true, t("fields.unexpected_error"));
        }
    };

    const decrease_qunatity = async (current_quantity) => {
        const body = {
            cartable_id: cart_item.cartable_id,
            quantity: current_quantity - 1,
        };
        const result = await patch_update_cart(body, locale);
        if (result.success) {
            notify(false, t("fields.operation_completed"));
        } else {
            notify(true, t("fields.unexpected_error"));
        }
    };
    return (
        <Accordion className="col-span-1">
            <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                    {/* Details Button */}
                    <div className="space-y-2">
                        <h2 className="font-bold text-lg">{cart_item.name[locale!]}</h2>
                        <AccordionSummary
                            sx={{
                                color: "#fb8d45",
                                background: "#FB8D451A",
                                fontWeight: "bold",
                                minHeight: "0!important",
                                padding: ".5rem .5rem",
                                "& .MuiAccordionSummary-content": {
                                    margin: "0!important",
                                    paddingY: "0",
                                },
                            }}
                            expandIcon={<ExpandMoreIcon sx={{ color: "#fb8d45" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            {t("fields.details")}
                        </AccordionSummary>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="space-y-2">
                            <h2 className="font-bold text-lg">
                            {format_price(cart_item.total_price)} {t!("fields.price_in_egp")}
                            </h2>
                            {/* Quantity*/}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: ".5rem",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    disabled={cart_item.quantity === 1 ? true : false}
                                    variant="outlined"
                                    sx={{ minWidth: "0px", padding: "8px", aspectRatio: "1" }}
                                    // onClick={() => increase_qunatity(cart_item.quantity)}
                                    aria-label="decrease quantity"
                                >
                                    <RemoveIcon fontSize="small" />
                                </Button>
                                <p className="text-2xl font-bold">{cart_item.quantity}</p>
                                <Button
                                    variant="contained"
                                    sx={{ minWidth: "0px", padding: "8px", aspectRatio: "1" }}
                                    // onClick={() => increase_qunatity(cart_item.quantity)}
                                    aria-label="increase quantity"
                                >
                                    <AddIcon fontSize="small" />
                                </Button>
                            </Box>
                        </div>
                        {/* Card Image */}
                        <Image
                            className="h-[80px] w-fit object-contain"
                            src={cart_item.img}
                            alt={cart_item.name[locale!]}
                        />
                    </div>
                </div>
            </div>
            {/* Accordion Details Content */}
            <AccordionDetails className="bg-blue-50">
                <p className="font-bold text-sm">{cart_item.details}</p>
            </AccordionDetails>
        </Accordion>
    );
}
