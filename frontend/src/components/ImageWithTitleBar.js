import React from "react"
import {Box} from "@mui/material";

const imageSx = {
    width: "100%",
    height: "100%",
}

export default function ImageWithTitleBar({src, sx, alt}) {

    return (
        <Box component={'img'} sx={sx || imageSx} src={src} alt={alt || 'no image'}/>
    )
}
