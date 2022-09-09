import React from "react"
import {Box} from "@mui/material";

const ColorCircleSx = {
    position: "relative",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
}

export default function ColorCircle({color}) {
    return <Box bgcolor={color} sx={ColorCircleSx}></Box>
}