import {
    Box,
    Button,
    Card,
    Container,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { build_meta_data, LocaleParams } from "@/app/[locale]/layout";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TLocale } from "@/interfaces/global.interface";
import BranchMap from "@/components/common/maps/branch.map";
import { notFound } from "next/navigation";
import { PageTitleText } from "@/components/common/text/static-page-title.text";
import Image from "next/image";
import StoreImg from "@/public/icons/store.png";
import BeatTheQueue from "@/public/store-details/beat-the-queue.jpg";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import HailIcon from "@mui/icons-material/Hail";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
export async function generateMetadata({
    params: { locale, branch_slug },
}: {
    params: LocaleParams;
}): Promise<Metadata> {
    const t = await getTranslations();
    //TODO SEO TAGS
    return build_meta_data(locale, [t("pages.store", { branch: branch_slug })]);
}

interface Props {
    params: {
        locale: TLocale;
        branch_slug: string;
    };
}

async function StoreDetailsPage({ params: { locale, branch_slug } }: Props) {
    const t = await getTranslations();

    // if (!branch_slug) {
    //     notFound();
    // }

    // const {
    //     id,
    //     name,
    //     names,
    //     description,
    //     descriptions,
    //     status
    // } = branch_data;

    const store = {
        id: "1",
        branch: {
            en: "Suez",
            ar: "سويس",
        },
        address: {
            en: "23-Jul, Suez, Suez Governorate, Egypt",
            ar: "407شارع 23يوليو, امام سينما مصر , محافظة السويس , مصر",
        },
        open_at: {
            en: "Opening Hours 11:00 AM to 02:50 AM",
            ar: "ساعات العمل من 11:00 AM إلى 02:50 AM",
        },
        delivery: true,
        self_pickup: true,
        dine_in: true,
        opening_date: "11:00 AM-02:50 AM",
        opening_hours: [
            {
                id: "1",
                day: {
                    en: "saturday",
                    ar: "ألسبت",
                },
                delivery: "11:00 AM-02:50 AM",
                self_pickup: "11:00 AM-02:50 AM",
            },
            {
                id: "2",
                day: {
                    en: "saturday",
                    ar: "ألسبت",
                },
                delivery: "11:00 AM-02:50 AM",
                self_pickup: "11:00 AM-02:50 AM",
            },
            {
                id: "3",
                day: {
                    en: "saturday",
                    ar: "ألسبت",
                },
                delivery: "11:00 AM-02:50 AM",
                self_pickup: "11:00 AM-02:50 AM",
            },
        ],
    };

    const advantages = [
        {
            id: "1",
            text: t("fields.order_from_app"),
            icon: <PhoneIphoneIcon fontSize="large" color="primary"/>,
        },
        {
            id: "2",
            text: t("fields.pay_online"),
            icon: <CreditCardIcon fontSize="large" color="primary"/>,
        },
        {
            id: "3",
            text: t("fields.notified"),
            icon: <NotificationsActiveIcon fontSize="large" color="primary"/>,
        },
    ];
    return (
        <Box component="main">
            {/*Main*/}
            <Container maxWidth="xl">
                {/*Header*/}
                {/*List Item (Name, Address, Opening Hours (General))*/}
                <PageTitleText title={t("fields.store_details")} />

                <div className="grid md:gap-x-4 md:grid-cols-3 gap-y-4 grid-cols-1 mt-4">
                    <main className="col-span-2">
                        <BranchSection locale={locale} store={store} />
                        <StoreDetailsServicesSection store={store} t={t} />
                        <StoreDetailsHoursSection store={store} locale={locale} t={t} />
                    </main>
                    <aside className="bg-white overflow-visible relative rounded-lg space-y-4 col-span-1 h-fit pb-8">
                        <div className="p-4 space-y-2">
                            <Image src={BeatTheQueue} alt="beat the queue and order now" />
                            <Divider />
                            {advantages.map((advantage) => {
                                return (
                                    <div key={advantage.id} className="flex items-center gap-4">
                                        {advantage.icon}
                                        <h2 className="font-bold text-sm">{advantage.text}</h2>
                                    </div>
                                );
                            })}
                        </div>
                        <Button variant="contained" sx={{width:"104%", marginInlineStart:"-2%", padding:"1rem 0"}}>Complete Order</Button>
                    </aside>
                </div>
            </Container>

        </Box>
    );
}
export default StoreDetailsPage;

const BranchSection = ({ locale, store }) => {
    return (
        <div className="cols-span-1 bg-white rounded-lg p-4 space-y-4">
            <Card variant="outlined" className="shadow-sm p-4 space-y-2">
                <div className="grid grid-cols-5 justify-center items-center gap-4">
                    <div className="col-span-1">
                        <Image className="w-full" src={StoreImg} alt="store icon" />
                    </div>
                    <div className="col-span-4 space-y-1">
                        <h2 className="font-bold">{store.branch[locale!]}</h2>
                        <p className="text-sm">{store.address[locale!]}</p>
                        <p className="font-bold text-sm">{store.open_at[locale!]}</p>
                    </div>
                </div>
            </Card>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94242.01296287174!2d39.08543670699913!3d21.564573236764062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3db477bf04a1b%3A0x9d3445f6f61cedd5!2sLishlazz!5e0!3m2!1sen!2seg!4v1702304747982!5m2!1sen!2seg"
                className="h-[250px] rounded-lg"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

const StoreDetailsServicesSection = ({ store, t }) => {
    return (
        <div className="bg-white rounded-lg p-4 space-y-4">
            {/* Title */}
            <h2 className="font-bold text-lg">{t("fields.services_available_here")}</h2>
            <Divider />
            <div className="cols-span-1 flex gap-6">
                {store.delivery && (
                    <div className="flex items-center gap-1">
                        <DeliveryDiningIcon color="primary" />
                        <h2>{t("fields.delivery")}</h2>
                    </div>
                )}
                {store.self_pickup && (
                    <div className="flex items-center gap-1">
                        <HailIcon color="primary" />
                        <h2>{t("fields.self_pickup")}</h2>
                    </div>
                )}
                {store.dine_in && (
                    <div className="flex items-center gap-1">
                        <TableRestaurantIcon color="primary" />
                        <h2>{t("fields.dine_in")}</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

const StoreDetailsHoursSection = ({ store, t, locale }) => {
    return (
        <div className="bg-white rounded-lg p-4 space-y-4">
            {/* Title */}
            <h2 className="font-bold text-lg">
                <AccessTimeIcon /> {t("fields.opening_and_closing_hours")}
            </h2>
            <p className="font-bold text-sm">
                {t("fields.opening_hours")} <strong>{store.opening_date}</strong>
            </p>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">
                                {t("fields.days")}
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">
                                {t("fields.delivery")}
                            </TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">
                                {t("fields.self_pickup")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.opening_hours.map((day) => (
                            <TableRow key={day.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                <TableCell align="center">{day.day[locale!]}</TableCell>
                                <TableCell align="center">{day.delivery}</TableCell>
                                <TableCell align="center">{day.self_pickup}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
