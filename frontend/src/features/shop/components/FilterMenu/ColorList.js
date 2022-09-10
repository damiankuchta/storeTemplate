import React from "react"
import colorsData from "../../../../data/colors";
import ColorCircle from "./ColorCircle";
import {Box} from "@mui/material";
import MapDictionary from "../../../../utils/mapDictionary";

const ColorListSx = {
    display: "grid",
    justifyItems: "stretch",
    alignItems: "stretch",
    gridTemplateColumns: "repeat(4, 25%)",
    gridGap: "5px",
    width: "100%",
}

export default function ColorList({colors, setFilterField}) {

    const toggleColor = (color) => {
        setFilterField({colors: {...colors, [color]: !colors[color]}})
    }

    return <Box sx={ColorListSx}>{MapDictionary(colors, (key, value) => {
        return <ColorCircle onClick={() => toggleColor(key)} selected={value} color={key}/>
    })

    }</Box>
}