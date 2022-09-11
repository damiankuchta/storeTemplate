import React, {useState} from "react";
import {Container, Link, ListItem} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import OrangeLine from "../../../components/OrangeLine";
import HighlightedText from "../../../components/HighlightedText";

const selectedOrangeLineSx = {
    transitionDuration: "0.5s",
    position: "relative",
    right: "60px",
    top: "8px",
}

const orangeLineSx = {

    transitionDuration: "0.3s",
    position: "relative",
    right: "100px",
    top: "8px",
}

const linkSx = {
    display: "flex",
    justifyContent: "center",
    paddingY: "15px",
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: 600,
    cursor: "pointer",
    color: "inherit",
}

export default function SidebarNavItem({dictKey: name, value: link}) {

    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    return (

        <Link sx={linkSx} component={RouterLink} to={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <OrangeLine sx={hover ? selectedOrangeLineSx : orangeLineSx}/>
                <HighlightedText selected={hover} name={name}>{name}</HighlightedText>
        </Link>

    )
}