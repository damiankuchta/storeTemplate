import React from "react"
import {Rating} from "@mui/material";

export default function StarsRaiting({value}) {

    return (
        <Rating name="read-only" value={value} readOnly/>
    )
}