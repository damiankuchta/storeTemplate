import {Link, ListItem} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import HighlightedText from "../../../components/HighlightedText";
import React from "react";

const linkSx = {
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: 530,
    cursor: "pointer",
    color: "white",
    paddingX: "20px"


}


export default function FooterNavItem({dictKey: name, value: link}) {

    return (
        <Link sx={linkSx} component={RouterLink} to={link}>
            <HighlightedText sx={linkSx}>{name}</HighlightedText>
        </Link>
    )
}
