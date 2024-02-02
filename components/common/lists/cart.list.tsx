import {Box} from "@mui/material";
import {GlobalInterface} from "@/interfaces/global.interface";
import {CartModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    data: CartModel["items"];
}

export default function MealsListSection({data}: Props) {

    return (
            <Box>
                {/*<CartItemCard />*/}
            </Box>
    );
}
