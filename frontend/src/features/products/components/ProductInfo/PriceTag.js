import React from "react"
import {Typography} from "@mui/material";

const priceSx = {
    color: "orange",
    fontSize: "25px"
}

export default function PriceTag({price}) {

    return (
            <Typography sx={priceSx}>
                ${price}
            </Typography>
    )
}