"use client";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Card, FormControlLabel, FormControlLabelProps, Radio, RadioGroup, useRadioGroup } from "@mui/material";
import Image from "next/image";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        ".MuiFormControlLabel-label": checked && {
            color: theme.palette.primary.main,
        },
    })
);

function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}
interface Props {
    trigger: any;
}

export default function CustomizeMealDialog({ trigger, data, locale }: Props) {
    const t = useTranslations();
    const [open, setOpen] = useState(false);
    const [dialogFullScreen, setDialogFullScreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        function handleResize() {
            // Check window width
            const isWindowMobile = window.innerWidth < 768; // You can adjust this threshold
            if (isWindowMobile) {
                setIsMobile(true);
                setDialogFullScreen(true);
            } else {
                setDialogFullScreen(false);
                setIsMobile(false);
            }
        }

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="w-full" onClick={handleClickOpen}>
                {trigger}
            </div>
            <BootstrapDialog
                fullScreen={dialogFullScreen}
                maxWidth={"xl"}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className="text-center">
                    {t("fields.customize_your_meal")}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {/* Desktop UI */}
                <DialogContent className="md:grid flex-col flex !p-0 relative overflow-auto grid-cols-8 gap-4">
                    <nav className="col-span-2 bg-white sticky md:top-[0px] top-[-1px] z-10">
                        <ul className="md:h-full md:space-y-4 px-4 md:block flex flex-nowrap md:overflow-y-auto overflow-y-scroll text-nowrap gap-4 justify-start items-center">
                            {data.options.map((option) => {
                                return (
                                    <li key={option.id} className="md:py-0 py-4">
                                        <Link className="font-bold mb-2 md:whitespace-normal whitespace-nowrap" href={`#${option.id}`}>
                                            {option.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <section className="col-span-3 p-4 m-0 md:overflow-auto overflow-visible bg-gray-200 scroll-smooth">
                        <ul className="space-y-4">
                            {data.options.map((option) => {
                                return (
                                    <div className="space-y-2" key={option.id} id={option.id}>
                                        <h2 className="font-bold py-2">{option.title}</h2>
                                        <ul className="bg-white rounded-lg">
                                            <RadioGroup name="use-radio-group" defaultValue="first">
                                                {option.choices.map((choice) => {
                                                    return (
                                                        <li className="font-bold transition-all hover:bg-gray-100" key={choice.id}>
                                                            <MyFormControlLabel
                                                                className="!m-0 p-4 flex justify-between w-full"
                                                                labelPlacement="start"
                                                                value={choice.id}
                                                                label={choice.name}
                                                                control={<Radio />}
                                                            />
                                                        </li>
                                                    );
                                                })}
                                            </RadioGroup>
                                        </ul>
                                    </div>
                                );
                            })}
                        </ul>
                    </section>
                    <aside className="md:order-none bg-white -order-1 col-span-3 p-4 flex justify-center items-center md:bg-gray-200">
                        <div className="inline">
                            <div className="mt-40 mb-12 relative">
                                <div className="absolute w-full top-0 z-10 translate-y-[-50%]">
                                    <Image className="mx-auto" src={data.photo_url} alt={data.name} />
                                </div>
                                <div className="bg-white relative rounded-xl pt-24 px-4 pb-6 space-y-4">
                                    <div className="flex justify-between items-center relative z-10">
                                        <Button>Reset</Button>
                                    </div>
                                    <article>
                                        <p className="rounded-lg font-bold text-xs text-ellipsis line-clamp-3 overflow-hidden">
                                            {data.descriptions[locale!]}
                                        </p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </aside>
                </DialogContent>
                <DialogActions className="!sm:hidden" sx={{ justifyContent: "center" }}>
                    <Button variant="contained" className="md:w-auto w-full" autoFocus onClick={handleClose}>
                        {t("fields.add_to_cart")}
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
