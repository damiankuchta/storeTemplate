import React from "react"
import Box from "@mui/material/Box";


export default function OrangeLine({sx}) {

    const orangeLineSx = {
        width: "80px",
        height: "3px",
        backgroundColor: "orange",
        marginBottom: "7px",
        margin: 0,
        ...sx
    }

    return (
        <Box sx={orangeLineSx}/>
    )
}