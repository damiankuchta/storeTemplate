import Image from "../../../../components/Image";
import React from "react";

const pictureSx = {
    border: "3px solid transparent",
    width: "98%",
}

const pictureWithSelectedBorderSx = {
    ...pictureSx,
    border: "3px solid orange"
}

const VariantPicture = ({currentVariant, setCurrentVariant, arrayItem: variant}) => {

    return (
        <Image sx={currentVariant === variant ? pictureWithSelectedBorderSx : pictureSx}
               src={variant.image}
               onClick={() => setCurrentVariant(variant)}/>
    )
}

export default VariantPicture