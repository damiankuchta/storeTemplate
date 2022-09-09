import React from "react"
import {Link} from "@mui/material"
import {useNavigate} from "react-router-dom";
import HighlightedText from "../../../components/HighlightedText";

const linkSx = {
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",

    "& > * ": {
        fontWeight: 600
    }
}


export default function NavItem({name, color}) {

    return (
        <Link variant={'string'} underline={"none"} color={color ?? "black"}>
            <HighlightedText sx={linkSx}>{name}</HighlightedText>
        </Link>
    )
}