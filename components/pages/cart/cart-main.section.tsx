"use client";

import MealsListSection from "@/components/common/lists/meals.list";
import theme from "@/components/theme/theme";
import {
    AppBar,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    Input,
    InputBase,
    Tab,
    Tabs,
    Typography,
    alpha,
    styled,
} from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import SearchIcon from "@mui/icons-material/Search";
import CartCard from "@/components/common/cards/cart.card";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import GrassIcon from "@mui/icons-material/Grass";
import { SlidesPerviewCarousel } from "@/components/common/carousels/images.carousel";
import Image from "next/image";
import { format_price } from "@/util/formatting.util";
import PercentIcon from "@mui/icons-material/Percent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BackHandIcon from "@mui/icons-material/BackHand";
import CouponDialog from "@/components/common/dialogs/coupon.dialog";
interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "2rem",
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: "100%",
    transition: "500ms",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "25%",
    },
    "&:focus-within": {
        width: "100%",
    },
}));
const SearchIconWrapper = styled(Button)(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    insetInlineEnd: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingInlineStart: "1rem",
        width: "100%",
        height: "100%",
    },
}));

const CartMainSection = ({ locale, cart }) => {
    const t = useTranslations();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <section className="col-span-4 bg-white rounded-lg">
            <h2 className="text-lg p-4 border-b border-b-1 font-bold">{t("fields.items_from_cart")}</h2>
            <div className="p-4 space-y-4">
                <article className="p-4 my-2 bg-[#f1f3f6] rounded-lg space-y-4">
                    {cart.cart_items.map((item) => {
                        return <CartCard key={item.id} cart_item={item} locale={locale} />;
                    })}
                    <article className="p-4 bg-white space-y-2">
                        <h2 className="font-bold">{t("fields.special_instructions")}</h2>
                        <div className="flex gap-1 items-center">
                            <StickyNote2Icon />
                            {/* <p>{t("fields.add_instructions")}</p> */}
                            <Input
                                fullWidth
                                placeholder={t("fields.add_instructions")}
                                inputProps={{ "aria-label": "instructions" }}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <BackHandIcon sx={{ color: "orange" }} fontSize="sm" />
                                <p className="text-xs">{t("fields.we_will_follow_instructions")}</p>
                            </div>
                            <Button size="small" variant="contained">
                                {t("fields.done")}
                            </Button>
                        </div>
                    </article>
                </article>
                {/*Go Green Card */}
                <GoGreenCard t={t} />
                {/* Complete Your Meal */}
                <CompleteYourMeal t={t} data={cart.cart_items} locale={locale} />
                <section className="lg:hidden ">
                    <CouponDialog locale={locale} />

                    <div className="p-4 space-y-4 shadow-md rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="">{t("fields.subtotal")}</span>
                            <span className="">{format_price(cart.total_price)} {t("fields.price_in_egp")}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="">{t("fields.delivery")}</span>
                            <span className="">{format_price(cart.total_price)} {t("fields.price_in_egp")}</span>
                        </div>
                        <Divider />
                        <div className="flex justify-between items-center">
                            <span className="">{t("fields.total")}</span>
                            <span className="">{format_price(cart.total_price)} {t("fields.price_in_egp")}</span>
                        </div>
                        <p className="text-xs italic text-[#fb8d45]">
                            {t("fields.inclusive_of_vats")} {format_price(cart.total_price)} {t("fields.price_in_egp")}
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default CartMainSection;

const GoGreenCard = ({ t }) => {
    return (
        <article className="p-4 space-y-2 rounded-lg border-s-4 border-s-[#bddb46] shadow-md">
            <div className="flex items-center gap-1">
                <h2 className="font-bold">{t("fields.go_green")}</h2>
                <GrassIcon sx={{ color: "#bddb46" }} />
            </div>
            <p className="text-sm">{t("fields.reduce_wastage")}</p>
            <FormGroup
                sx={{ display: "flex", gap: "8px", flexDirection: "row", alignItems: "center" }}
                className="flex flex-row items-center"
            >
                <FormControlLabel
                    sx={{
                        border: `1px ${theme.palette.primary.main} solid`,
                        fontWeight: "bold",
                        gap: "8px",
                        margin: "0",
                        padding: "8px 16px",
                        "& .MuiCheckbox-root": {
                            padding: "0",
                        },
                        "& .mui-8nxdaq-MuiTypography-root": {
                            fontWeight: "bold",
                        },
                    }}
                    className="border border-1-primary rounded-md"
                    control={<Checkbox defaultChecked />}
                    label={t("fields.no_cutlery")}
                />
                <FormControlLabel
                    sx={{
                        border: `1px ${theme.palette.primary.main} solid`,
                        gap: "8px",
                        margin: "0",
                        padding: "8px 16px",
                        "& .MuiCheckbox-root": {
                            padding: "0",
                        },
                        "& .mui-8nxdaq-MuiTypography-root": {
                            fontWeight: "bold",
                        },
                    }}
                    className="border rounded-md"
                    control={<Checkbox defaultChecked />}
                    label={t("fields.no_ketchup")}
                />
            </FormGroup>
        </article>
    );
};

const CompleteYourMeal = ({ t, data, locale }) => {
    console.log(data);

    return (
        <div>
            <h2 className="text-lg font-bold">{t("fields.complete_your_meal")}</h2>
            <SlidesPerviewCarousel
                slidesPerView={{ main: 1, lg: 4, md: 4, sm: 4 }}
                spaceBetween={{ main: 20 }}
                slides={data.map((e, index) => {
                    return (
                        <article key={e.id}>
                            <Image src={e.img} alt={e.name[locale!]} />
                            <p>{e.name[locale!]}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold">
                                    {format_price(e.total_price)} {t("fields.price_in_egp")}
                                </span>
                                <Button variant="outlined" size="small">
                                    {t("fields.add")}
                                </Button>
                            </div>
                        </article>
                    );
                })}
            ></SlidesPerviewCarousel>
        </div>
    );
};
