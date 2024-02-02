"use client";
import { Button, IconButton } from "@mui/material";
import { useState, useEffect, ReactNode, SetStateAction, Dispatch } from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CheckIcon from "@mui/icons-material/Check";
import HailIcon from "@mui/icons-material/Hail";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import { useTranslations } from "next-intl";

interface OrderOptionModel {
    id:string;
    label:string;
    icon:ReactNode;
}

export const OrderType = () => {
    const t = useTranslations();
    const orderOptions : OrderOptionModel[] = [
        {
            id: "1",
            label: t("fields.delivery"),
            icon: <DeliveryDiningIcon />,
        },
        {
            id: "2",
            label: t("fields.self_pickup"),
            icon: <HailIcon />,
        },
        {
            id: "3",
            label: t("fields.dine_in"),
            icon: <TableRestaurantIcon />,
        },
    ];
    const [selectedButton, setSelectedButton] = useState(orderOptions[0]);

    return (
        <div>
            <div className="lg:hidden">
                <OrderTypeMobile orderOptions={orderOptions} setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
            </div>
            <div className="lg:block hidden">
                <OrderTypeDesktop orderOptions={orderOptions} setSelectedButton={setSelectedButton} selectedButton={selectedButton} />
            </div>
        </div>
    );
};

interface Props {
    orderOptions: OrderOptionModel[];
    setSelectedButton: Dispatch<SetStateAction<OrderOptionModel>>;
    selectedButton: OrderOptionModel;
}

export const OrderTypeDesktop = ({ orderOptions, setSelectedButton, selectedButton } : Props) => {

    const handleButtonClick = (option : OrderOptionModel) => {
        if (selectedButton.id !== option.id) {
            setSelectedButton(option);
        }
    };

    return (
        <div className="flex gap-3">
            {orderOptions.map((option) => (
                <Button
                    key={option.id}
                    onClick={() => handleButtonClick(option)}
                    color={selectedButton.id === option.id ? "primary" : "grey"}
                    variant="outlined"
                    sx={{
                        display: "flex",
                        gap: "4px",
                    }}
                >
                    {option.icon}
                    {selectedButton.id === option.id && <CheckIcon fontSize="small" />}
                    {option.label}
                </Button>
            ))}
        </div>
    );
};

const OrderTypeButtonMobile = ({ label, icon, isSelected, onClick }) => {
    return (
        <Button
            onClick={onClick}
            color={isSelected ? "primary" : "grey"}
            sx={{
                display: "block",
                gap: "4px",
            }}
        >
            <Button
                component="i"
                color={isSelected ? "primary" : "grey"}
                variant="outlined"
                className="!rounded-full aspect-square w-fit border-primary-500"
            >
                {icon}
            </Button>
            <p className="text-center mx-auto">{label}</p>
        </Button>
    );
};


export const OrderTypeMobile = ({orderOptions, setSelectedButton, selectedButton } : Props) => {

    const handleButtonClick = (option : OrderOptionModel) => {
        if (selectedButton.id !== option.id) {
            setSelectedButton(option);
        }
    };

    return (
        <div className="flex gap-2 w-full justify-around mt-4">
            {orderOptions.map((option) => (
                <Button
                key={option.id}
                onClick={() => handleButtonClick(option)}
                color={selectedButton.id === option.id ? "primary" : "grey"}
                sx={{
                    display: "block",
                    gap: "4px",
                }}>
                    <Button
                        component="i"
                        color={selectedButton.id === option.id ? "primary" : "grey"}
                        variant="outlined"
                        className="!rounded-full aspect-square w-fit border-primary-500"
                    >
                        {option.icon}
                    </Button>
                    <p className="text-center mx-auto">{option.label}</p>
                </Button>
            ))}
        </div>
    );
};
