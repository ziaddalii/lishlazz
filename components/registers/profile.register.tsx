"use client";
import {useEffect} from "react";
import {is_authenticated} from "@/api/cookies.api";
import {get_user_info} from "@/api/requests.api";
import {deleteCookie, getCookie} from "cookies-next";

export function ProfileRegister() {
    
    const token = getCookie("token");
    
    useEffect(() => {

        if (!is_authenticated()) {
            return;
        }

        get_user_info().then((profile) => {

            // if(profile.type === -1){
            //     token && deleteCookie("token");
            //     localStorage.clear();
            //     return;
            // }
            //
            // localStorage.setItem(
            //     "favorites",
            //     JSON.stringify(
            //         profile.favorites,
            //     )
            // );
            //
            // localStorage.setItem("notifications", profile.notifications.length.toString());

        }).catch(() => {
            token && deleteCookie("token");
            localStorage.clear();
        });
    }, []);

    return (<></>);
}
