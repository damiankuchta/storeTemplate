import React from "react"
import Image from "../../../components/Image";
import {Grid, List} from "@mui/material";
import VariantsPictures from "./Pictures/VariantsPictures";

const mainPictureSx = {
    width: "100%",
}

export default function Pictures({currentVariant, variants, setCurrentVariant}) {

    return (
        <React.Fragment>
            <Image src={currentVariant.image} sx={mainPictureSx}/>

            <Grid container spacing={1}>
                <VariantsPictures setCurrentVariant={setCurrentVariant}
                                  currentVariant={currentVariant}
                                  variants={variants}/>
            </Grid>
        </React.Fragment>
    )
}