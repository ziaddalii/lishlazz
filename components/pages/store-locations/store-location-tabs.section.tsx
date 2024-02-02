"use client";
import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useTranslations } from "next-intl";

const StoreLocationTabs = () => {
    const [value, setValue] = useState(0);
    const t = useTranslations();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box className="border-b border-b-1" sx={{ marginTop: "1rem", width: "100%", bgcolor: "background.paper" }}>
            <Tabs
                sx={{
                    "& .mui-jpln7h-MuiTabs-scroller": {
                        overflow: "auto!important",
                    },
                }}
                value={value}
                onChange={handleChange}
            >
                <Tab label={t("fields.all")} />
                <Tab label={t("fields.delivery")} />
                <Tab label={t("fields.self_pickup")} />
                <Tab label={t("fields.dine_in")} />
            </Tabs>
        </Box>
    );
};

export default StoreLocationTabs;
