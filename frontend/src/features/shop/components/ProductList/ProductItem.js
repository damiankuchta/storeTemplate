import React from "react"
import {Box, Typography} from "@mui/material";
import Image from "../../../../components/Image";
import OrangeLine from "../../../../components/OrangeLine";
import PriceTag from "../../../products/components/ProductInfo/PriceTag";
import StarsRaiting from "../../../products/components/ProductInfo/StarsRaiting";

const ProductItemSx = {
    boxSizing: "border-box",
    width: "100%",
    padding: "10px",

    "& > img": {
        width: "100%"
    }
}

export default function ProductItem({product}) {

    const {title, rating, description, productID, variants, fromPrice, category, brand} = product

    return (
        <Box sx={ProductItemSx}>
            <Image src={variants[0].image}/>
            <OrangeLine/>
            <PriceTag price={fromPrice}/>
            <Typography>{title}</Typography>
            <StarsRaiting value={rating}/>
        </Box>
    )
}