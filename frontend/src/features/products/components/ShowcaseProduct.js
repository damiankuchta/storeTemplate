import React from "react"
import {Box, Typography} from "@mui/material";
import OrangeLine from "../../../components/OrangeLine";

const transitionTime = "0.3s"

const mainBoxSx = {
    position: "relative",
    width: "100%",
    cursor: "pointer",

    "&:hover > img": {
        transition: transitionTime,
        filter: "grayscale(100%) brightness(0.4) contrast(80%)",
    },

    "&:hover > div > p, &:hover > div> h5": {
        transition: transitionTime,
        color: "white"
    }
}

const imgSx = {
    width: "100%",
    transition: transitionTime,
}

const headerBoxSx = {
    position: "absolute",
    marginTop: "30px",
    left: "40px",
    right: "40px",
    zIndex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "5px",
    padding: "10px"
}

const nameTextSx = {fontWeight: "550",}

const priceTextSx = {
    color: "#696969",
    fontSize: "15px",
    fontWeight: "540",
    transition: transitionTime,
}

export default function ShowcaseProduct({src, alt, productName, fromPrice}) {

    return (
        <Box sx={mainBoxSx}>
            <Box sx={headerBoxSx}>
                <OrangeLine/>
                {fromPrice && <Typography sx={priceTextSx}>From ${fromPrice}</Typography>}
                {productName && <Typography sx={nameTextSx} variant={'h5'}>{productName}</Typography>}
            </Box>
            <Box component={'img'} sx={imgSx} src={src} alt={alt || 'no image'}/>
        </Box>
    )
}