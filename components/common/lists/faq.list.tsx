import {Box} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {FaqModel, MealModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    data: FaqModel[];
}

export default function MealsListSection({data}: Props) {

    return (
            <Box>
                {/*<FaqCard question answer/>*/}
            </Box>
    );
}
