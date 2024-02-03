import {Box} from "@mui/material";
import {build_meta_data, LocaleParams} from "@/app/[locale]/layout";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {GlobalInterface} from "@/interfaces/global.interface";
import {BranchModel} from "@/api/interfaces.api";

interface Props extends GlobalInterface {
    data: BranchModel[];
}

export default function BranchesListSection({data}: Props) {

    return (
            <Box>
                {/*<BranchCard/>*/}
            </Box>
    );
}
