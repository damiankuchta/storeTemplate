import React from "react"
import Box from "@mui/material/Box";

    const orangeLineSx = {
        width: "80px",
        height: "3px",
        backgroundColor: "orange",
        marginBottom: "7px",
        margin: 0,
    }

export default function OrangeLine({sx}) {

    return (
        <Box sx={{...orangeLineSx, ...sx}}/>
    )
}