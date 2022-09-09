import React from "react"
import colorsData from "../../../../data/colors";
import ColorCircle from "./ColorCircle";
import {Box} from "@mui/material";

const ColorListSx = {
    display: "grid",
    justifyItems: "stretch",
    alignItems: "stretch",
    gridTemplateColumns: "repeat(4, 25%)",
    gridGap: "5px",
    width: "100%",
}

export default function ColorList() {
    return <Box sx={ColorListSx}>{colorsData.map(item => {
        return <ColorCircle color={item}/>
    })}</Box>
}