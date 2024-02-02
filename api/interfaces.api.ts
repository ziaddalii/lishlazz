import {DayName} from "@/enums/day-name.enum";

interface LocaleFullStr {
    en: string;
    ar: string;
};

export interface ResponseGet<T> {
    status: 1 | 0;
    data: T;
}

export interface ResponseCreate {
    status: 1 | 0;
    message: string;
}

export interface ResponseUpdate {
    status: 1 | 0;
    message: string;
}

export interface JwtResponse {
    token: {
        accessToken: string;
        expiresAt: string;
        expiresIn: string;
    };
    user: {
        type: number;
        names: {
            first: string;
            last: string;
        };
        full_name: string;
        username: string;
        phone: string;
        phones: string[];
        location: object;
        favorites: string[];
        seller: object;
        photoUrl: string;
    };
}

export interface CustomScriptModel {

}

export interface CategoryModel {
    id: string;
    slug: string;
    names: LocaleFullStr;
    name: string;
    descriptions: LocaleFullStr;
    description: string;
}

export interface MealModel {
    id: string;
    slug: string;
    names: LocaleFullStr;
    name: string;
    descriptions: LocaleFullStr;
    description: string;
}

export interface LayoutModel {
    custom_scripts: CustomScriptModel[];
    nav_bar: {};
}

export interface HomeModel {
    banners: {
        id: string;
        photo_url: string;
        description: string;
        seo_tags: string;
        ref_id: string;
    }[];
    explore: {
        exclusive?:boolean;
        id: string;
        photo_url: string;
        image:string;
        seo_tags: string;
        names: LocaleFullStr;
        name: string;
        descriptions: LocaleFullStr;
        description: string;
    }[];
    deals: {
        id: string;
        names: LocaleFullStr;
        name: string;
        descriptions: LocaleFullStr;
        seo_tags: string;
        photo_url: string;
        prices: {
            normal: number;
            discount: number;
            percent: number;
        }
        status: {
            is_app_exclusive: boolean;
        };
    }[];
    best_sellers: {
        id: string;
        names: LocaleFullStr;
        name: string;
        descriptions: LocaleFullStr;
        exclusive:boolean;
        seo_tags: string;
        photo_url: string;
        prices: {
            normal: number;
            discount: number;
            percent: number;
        }
    }[];
}

export interface JwtResponse {}

export interface LoginFormModel {}

export interface PersonalInfoModel {}

export interface RegisterPage {}

export interface SearchDataModel {}

export interface PostSearchModel {}

export interface Sitemap {
    categories: CategoryModel[];
    meals: MealModel[];
}

export interface StaticPage {}

export interface FavoriteModel {}

export interface UpdateFavoriteModel {}

export interface NotificationModel {}

export interface BulkOrderFormModel {
    name: string;
    phone: string;
    email: string;
    organization_name: string;
    address_1: string;
    address_2: string;
    city: string;
    order_date: string;
    order_time: string;
    num_of_people: string;
}

export interface StoreLocationFormModel {
    q_name?: string;
    city?: string;
}

export interface LocationModel {
    id: string;
    slug: string;
    name: string;
    names: LocaleFullStr;
    description: string;
    descriptions: LocaleFullStr;
}

export interface LocationPin {
    long: string;
    lat: string;
}

export interface CountryModel extends LocationModel {}

export interface ProvinceModel extends LocationModel {
    country: CountryModel;
}

export interface CityModel extends LocationModel {
    country: CountryModel;
    province: ProvinceModel;
}

export interface BranchModel {
    id: string;
    slug: string;
    name: string;
    names: LocaleFullStr;
    description: string;
    descriptions: LocaleFullStr;
    address: string;
    location: {
        pin: LocationPin;
        country: CountryModel;
        province: ProvinceModel;
        city: CityModel;
    },
    hours: {
        general: {
            open: string;
            close: string;
        };
        by_day: {
            day: DayName;
            delivery: {
                open: string;
                close: string;
            };
            carry_out: {
                open: string;
                close: string;
            };
        };
    };
    status: {
        with_delivery: boolean;
        with_self_pickup: boolean;
        with_dine_in: boolean;
    };
}

export interface FaqModel {
    id: string;
    question: string;
    questions: LocaleFullStr;
    answer: string;
    answers: LocaleFullStr;
}

export interface AddressModel {
    id: string;
    pin: LocationPin;
    description: string;
    country: CountryModel;
    province: ProvinceModel;
    city: CityModel;
}

export interface CouponModel {
    id: string;
    code: string;
    value: number;
    percent: number;
    expires_at: string;
}

export interface CartModel {
    summary: {
        selected_address: string;
        addresses: AddressModel[];
        coupon?: CouponModel;
        sub_total: number;
        delivery: number;
        discount: number;
        vat: number;
        total: number;
    };
    items: MealModel & {
        quantity: number;
        total: number;
    }[];
    other: {
        optional_instructions: "";
        with_cutlery: boolean;
        with_ketchup: boolean;
    };
    extras: MealModel[];
}
