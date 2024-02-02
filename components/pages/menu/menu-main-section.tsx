"use client";

import MealsListSection from "@/components/common/lists/meals.list";
import theme from "@/components/theme/theme";
import { AppBar, Box, Button, InputBase, Tab, Tabs, Typography, alpha, styled } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";
import SearchIcon from "@mui/icons-material/Search";

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

const MenuMainSection = ({ locale, data }) => {
    const t = useTranslations();

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <main className="col-span-4">
            <Box>
                <header>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        // indicatorColor="secondary"
                        // textColor="inherit"
                        className="flex-wrap"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        {data.map((category, i) => {
                            return <Tab key={i} label={category.name} {...a11yProps(i)} />;
                        })}
                        <Search className="sm:block hidden">
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>

                            <StyledInputBase placeholder={t("fields.search")} inputProps={{ "aria-label": "search" }} />
                        </Search>
                    </Tabs>
                    <Search className="sm:hidden block mt-4">
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>

                        <StyledInputBase placeholder={t("fields.search")} inputProps={{ "aria-label": "search" }} />
                    </Search>
                </header>

                <div axis={locale === "ar" ? "x-reverse" : "x"} index={value}>
                    {data.map((category, i) => {
                        return (
                            <TabPanel key={category.id} value={value} index={i} dir={theme.direction}>
                                <MealsListSection data={category.data} locale={locale} t={t} />
                            </TabPanel>
                        );
                    })}
                </div>
            </Box>
        </main>
    );
};

export default MenuMainSection;
