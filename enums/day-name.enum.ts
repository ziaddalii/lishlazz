import {TLocalization} from "@/interfaces/global.interface";

export enum DayName {
    SAT,
    SUN,
    MON,
    TUE,
    WED,
    THU,
    FRI,
}

export const get_day_name = (type: DayName, t: TLocalization) => {
    
    switch (type) {
        case DayName.SAT:
            return t("days.saturday");
        case DayName.SUN:
            return t("days.sunday");
        case DayName.MON:
            return t("days.monday");
        case DayName.TUE:
            return t("days.tuesday");
        case DayName.WED:
            return t("days.wednesday");
        case DayName.THU:
            return t("days.thursday");
        case DayName.FRI:
            return t("days.friday");
        default:
            return t("fields.unknown");
    }
};
