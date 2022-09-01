import React from "react"
import {Typography} from "@mui/material";

export default function PriceTag({price}) {

    return (
            <Typography>
                {price}
            </Typography>
    )
}