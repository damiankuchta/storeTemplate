import React from "react"
import Box from "@mui/material/Box";

export default function Image({sx, src, onClick}) {


    return (
        <Box as={'img'} src={src} sx={sx} onClick={onClick}/>
    )
}