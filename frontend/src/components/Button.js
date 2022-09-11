import React from "react"
import {Button as B} from "@mui/material";

const buttonSx = {
    backgroundColor: "orange",
    color: "white",

    "&:hover": {
        backgroundColor: "black",
    },
}

export default function Button(props) {
    return (<B {...props} sx={{...buttonSx, ...props.sx}}>{props.children}</B>)
}