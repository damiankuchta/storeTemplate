import React from "react"
import {Box} from "@mui/material";

const colorCircleSx = {
    position: "relative",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "solid 2px rgba(1,1,1,0.0)",
    cursor: "pointer"
}

const selectedCircleSx = {
    border: "solid 2px rgba(1,1,1,0.5)"
}

export default function ColorCircle({dictKey: color, value: selected, onClick}) {
    return <Box onClick={onClick} bgcolor={color} sx={{...colorCircleSx, ...(selected && selectedCircleSx)}}/>
}