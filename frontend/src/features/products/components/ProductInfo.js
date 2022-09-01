import React from "react"
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import StarsRaiting from "./ProductInfo/StarsRaiting";
import IsInStock from "./ProductInfo/IsInStock";
import PriceTag from "./ProductInfo/PriceTag";

const topHolderSx = {
    marginBottom: "40px",

    "& > *": {
        marginY: "5px"
    },

    "& > h4": {
        fontWeight: "bold"
    }
}

const descriptionText = {
    lineHeight: "35px",
    marginBottom: "40px",
}

export default function ProductInfo({product, currentVariatn}) {

    return (
        <Box>
            <Box sx={topHolderSx}>
                <PriceTag price={currentVariatn.price}/>
                <Typography variant={"h4"}>{product.title}</Typography>
                <StarsRaiting value={product.rating}/>
                <IsInStock isInStock={currentVariatn.isInStock}/>
            </Box>

            <Typography sx={descriptionText}>{product.description}</Typography>
        </Box>
    )
}