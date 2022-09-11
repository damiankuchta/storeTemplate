import React from "react"
import {Box, Typography} from "@mui/material";
import OrangeLine from "../../../../components/OrangeLine";
import {Link} from "react-router-dom";

const transitionTime = "0.3s"

const imgSx = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
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

const nameTextSx = {
    fontWeight: "550",
    marginLeft: "auto",
    marginRight: "auto",
}

const priceTextSx = {
    color: "#696969",
    fontSize: "15px",
    fontWeight: "540",
    transition: transitionTime,
}

const mainBoxSx = {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    color: "black",

    "&:hover > img": {
        transition: transitionTime,
        filter: "grayscale(100%) brightness(0.4) contrast(80%)",
    },

    "&:hover > div > p, &:hover > div> h5": {
        transition: transitionTime,
        color: "white"
    },
}

export default function ShowcaseProduct({alt, product, sx, isBigger}) {


    return (
        <Link to={`/product/${product.productID}`}>
            <Box sx={{...mainBoxSx, ...sx, height: isBigger ? "580px" : "410px"}}>
                <Box sx={headerBoxSx}>
                    <OrangeLine/>
                    {product.fromPrice && <Typography sx={priceTextSx}>From ${product.fromPrice}</Typography>}
                    {product.title && <Typography sx={nameTextSx} variant={'h5'}>{product.title}</Typography>}
                </Box>
                <Box component={'img'} sx={imgSx} src={product.variants[0].image} alt={alt || 'no image'}/>
            </Box>
        </Link>
    )
}
