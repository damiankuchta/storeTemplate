import React from "react"
import {Box, Typography} from "@mui/material";
import OrangeLine from "../../../../components/OrangeLine";

const priceSx = {
    color: "orange",
    fontSize: "25px"
}

export default function PriceTag({price}) {

    return (
        <Box>
            <OrangeLine/>
            <Typography sx={priceSx}>
                ${price}
            </Typography>
        </Box>
    )
}