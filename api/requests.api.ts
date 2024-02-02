// noinspection TypeScriptValidateTypes

"use server";

import {cookies} from "next/headers";
import {
    LAYOUT,
    HOME,
    STATIC_PAGE,
    SITEMAP,
    CONTACT_US,
    REGISTER,
    LOGIN,
    GET_USER_INFO,
    POST_SEARCH,
    GET_FAVORITES,
    UPDATE_FAVORITES,
    GET_NOTIFICATIONS,
    DELETE_NOTIFICATIONS,
} from "./constants.api";
import {
    ResponseCreate,
    ResponseGet,
    LayoutModel,
    ContactUsFormModel,
    HomeModel,
    JwtResponse,
    LoginFormModel,
    PersonalInfoModel,
    RegisterPage,
    SearchDataModel,
    PostSearchModel,
    Sitemap,
    StaticPage,
    FavoriteModel, UpdateFavoriteModel, NotificationModel,
} from "./interfaces.api";
import {get_request_errors} from "@/util/formatting.util";
import {TLocale} from "@/interfaces/global.interface";
import {BodyInterface} from "@/components/common/inputs/send-message.inputs";

const CONFIG_IS_TESTING = false;

const DEFAULT_STATIC_PAGE_OBJ = {
    id: "",
    title: "",
    titles: {
        en: "",
        ar: "",
    },
    body: {
        en: "",
        ar: "",
    },
    slug: "",
    seo_tags: "",
    order: 0,
    created_at: "",
};

const DEFAULT_LOCATION_OBJ = {
    id: "",
    name: "",
    names: {
        en: "",
        ar: "",
    },
    created_at: "",
};

const DEFAULT_USER_INFO = {};

export async function get_layout(): Promise<LayoutModel> {
    try {
        
        const response: Response = await fetch(LAYOUT, {cache: "no-cache"});
        
        const body: ResponseGet<LayoutModel> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
        
    } catch (e) {
        
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return {
            custom_scripts: {
                heads: [],
                body: [],
            },
            nav_bar: {},
            footer: {},
        };
    }
}

export async function get_home(): Promise<HomeModel> {
    try {
        
        const response: Response = await fetch(HOME, {cache: "no-cache"});
        
        const body: ResponseGet<HomeModel> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return {
        };
    }
}

export async function get_static_page(page: string): Promise<StaticPage> {
    try {
        const response: Response = await fetch(`${STATIC_PAGE}/${page}`, {cache: "no-cache"});
        
        const body: ResponseGet<StaticPage> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return DEFAULT_STATIC_PAGE_OBJ;
    }
}

export async function get_sitemap(): Promise<Sitemap> {
    
    try {
        const response: Response = await fetch(SITEMAP, {cache: "no-cache"});
        
        const body: ResponseGet<Sitemap> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return {
            static_pages: {
                about: DEFAULT_STATIC_PAGE_OBJ,
                privacy: DEFAULT_STATIC_PAGE_OBJ,
                terms: DEFAULT_STATIC_PAGE_OBJ,
            },
        };
    }
}

export async function post_contact_us(contact_form: ContactUsFormModel, locale: TLocale): Promise<string> {
    try {
        
        const response: Response = await fetch(CONTACT_US, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": locale,
            },
            body: JSON.stringify(contact_form),
        });
        
        const body: ResponseCreate = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException(get_request_errors(body, locale));
        }
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        return e.message;
    }
}

export async function post_register_form(form_data: FormData, locale: TLocale): Promise<string> {
    try {
        const response: Response = await fetch(REGISTER, {
            method: "POST",
            headers: {
                "Accept-Language": locale,
            },
            body: form_data,
        });
        
        const body: ResponseCreate = await response.json();
        
        if (response.status !== 200) {
            throw new DOMException(get_request_errors(body, locale));
        }
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        return e.message;
    }
}

export async function post_login(login_form: LoginFormModel, locale: TLocale): Promise<string | JwtResponse> {
    try {
        const response: Response = await fetch(LOGIN, {
            cache: "no-cache",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": locale,
            },
            body: JSON.stringify(login_form),
        });
        
        const body: JwtResponse = await response.json();
        
        if (response.status !== 200) {
            throw new DOMException(get_request_errors(body, locale));
        }
        
        return body;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return e.message;
    }
}

export async function get_user_info(): Promise<PersonalInfoModel> {
    
    const token = await cookies().get("token");
    
    try {
        const response: Response = await fetch(GET_USER_INFO, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value}`,
            },
        });
        
        const body: ResponseGet<PersonalInfoModel> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return DEFAULT_USER_INFO;
    }
}

export async function post_update_profile(form_data: FormData, locale: TLocale): Promise<string> {
    const token = await cookies().get("token");
    
    try {
        const response: Response = await fetch(GET_USER_INFO, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token?.value}`,
            },
            body: form_data,
        });
        
        const body: ResponseGet<PersonalInfoModel> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException(get_request_errors(body, locale));
        }
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        return e.message;
    }
}

export async function post_search(searchBody: PostSearchModel, locale: TLocale): Promise<SearchDataModel> {
    try {
        
        const response: Response = await fetch(POST_SEARCH, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": locale,
            },
            body: JSON.stringify(searchBody),
        });
        
        const body: SearchDataModel = await response.json();
        
        if (response.status !== 200) {
            throw new DOMException(get_request_errors(body, locale));
        }
        
        return body;
        
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return e.message;
    }
    
}

export async function get_favorites(): Promise<FavoriteModel[]> {
    const token = await cookies().get("token");
    
    try {
        const response: Response = await fetch(GET_FAVORITES, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value}`,
            },
        });
        
        const body: ResponseGet<FavoriteModel[]> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return [];
    }
}

export async function post_update_favorites(
    favorites: UpdateFavoriteModel,
    locale: TLocale
): Promise<FavoriteModel[] | string> {
    
    const token = await cookies().get("token");
    
    try {
        const response: Response = await fetch(UPDATE_FAVORITES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value}`,
            },
            body: JSON.stringify(favorites),
        });
        
        const body: ResponseGet<FavoriteModel[]> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException(get_request_errors(body, locale));
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return e.message;
    }
}

export async function get_notifications(): Promise<NotificationModel[]> {

    const token = await cookies().get("token");
    
    try {
        const response: Response = await fetch(GET_NOTIFICATIONS, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token?.value}`,
            },
        });
        
        const body: ResponseGet<NotificationModel[]> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException();
        }
        
        return body.data;
    } catch (e) {
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return [];
    }
}

export async function post_delete_notifications(
    form_data: FormData,
    locale: TLocale
): Promise<NotificationModel[] | string> {
    
    const token = await cookies().get("token");
    
    try {
        const response: Response = await fetch(DELETE_NOTIFICATIONS, {
            method: "POST",
            headers: {
                "Accept-Language": locale,
                Authorization: `Bearer ${token?.value}`,
            },
            body: form_data,
        });
        
        const body: ResponseGet<NotificationModel[]> = await response.json();
        
        if (body.status !== 1) {
            throw new DOMException(get_request_errors(body, locale));
        }
        
        return body.data;
    } catch (e) {
        
        if (CONFIG_IS_TESTING) {
            console.log(e);
        }
        
        return e.message;
    }
}
