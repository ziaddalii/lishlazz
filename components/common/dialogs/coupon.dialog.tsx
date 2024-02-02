"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import PercentIcon from "@mui/icons-material/Percent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useTranslations } from "next-intl";
import { InputAdornment, TextField } from "@mui/material";
import Image from "next/image";
import NoOffers from "@/public/icons/no-offers.svg";
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CouponDialog({ locale }) {
    const t = useTranslations();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <div
                className="p-4 cursor-pointer shadow-md flex justify-between items-center rounded-lg border-s-4 border-s-[#e4002b]"
                onClick={handleClickOpen}
            >
                <div className="flex gap-2 items-center">
                    <PercentIcon color="primary" />
                    <p className="font-bold">{t("fields.apply_coupon")}</p>
                </div>
                {locale === "en" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <span className="text-lg w-fit mx-auto font-bold pt-4 border-b-4 border-b-red-500">
                    {t("fields.offers")}
                </span>
                <p className="font-bold text-center mt-2">{t("fields.select_offer")}</p>
                <DialogContent>
                    <TextField
                        label={t("fields.enter_your_coupon_here")}
                        sx={{
                            "& .mui-1fgz0fq-MuiFormLabel-root-MuiInputLabel-root": {
                                fontSize: "12px!important",
                            },
                        }}
                        id="outlined-start-adornment"
                        variant="filled"
                        size="small"
                        fullWidth
                        InputProps={{
                            [locale === "en" ? "endAdornment" : "startAdornment"]: (
                                <InputAdornment position={locale === "en" ? "end" : "end"}>
                                    <Button size="small" variant="text">
                                        {t("fields.apply")}
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className="py-4 space-y-2">
                        <Image src={NoOffers} alt="no deals and offers" className="mx-auto" />
                        <p className="font-bold text-lg text-center">{t("fields.no_deals_offers")}</p>
                    </div>
                </DialogContent>
                <div className="text-center px-4 pb-4">
                    <Button fullWidth variant="contained" className="mx-auto" onClick={handleClose}>
                        {t("fields.explore_menu")}
                    </Button>
                </div>
            </Dialog>
        </React.Fragment>
    );
}
