import React from "react"
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";


export default function IsInStock({isInStock}) {

    const inStockSx = {
        display: "flex",
        alignItems: "center",
    }

    const circleSx = {
        backgroundColor: isInStock ? "green" : "red",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        marginRight: "5px"
    }

    const typographySx = {
        fontSize: "11px",
    }

    return (
        <Box as={"span"} sx={inStockSx}>
            <Box sx={circleSx}/><Typography sx={typographySx}>{isInStock ? "In Stock" : "Not in Stock"}</Typography>
        </Box>
    )
}