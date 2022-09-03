import Image from "../../../../components/Image";
import React from "react";
import {Grid} from "@mui/material";

const pictureSx = {
    border: "3px solid transparent",
    width: "98%",
}

const pictureWithSelectedBorderSx = {
    ...pictureSx,
    border: "3px solid orange"
}

const VariantsPictures = ({currentVariant, variants, setCurrentVariant}) => {

    return (
        variants.map(variant => {
                const isBorderSelected = currentVariant.variantID === variant.variantID
                return <Grid item xs={3} ><Image sx={isBorderSelected ? pictureWithSelectedBorderSx : pictureSx} src={variant.image}
                              onClick={() => setCurrentVariant(variant)}/></Grid>
            }
        ))
}

export default VariantsPictures