import React from "react"
import {Button as B} from "@mui/material";

const buttonSx = {
    backgroundColor: "orange",
    color: "white",

    "&:hover": {
        backgroundColor: "black",
    },
}

export default function Button({children, onClick, sx}) {
    return (<B sx={{...buttonSx, ...sx}} onClick={onClick}>{children}</B>)
}