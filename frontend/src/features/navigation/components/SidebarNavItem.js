import React, {useState} from "react"
import NavItem from "./NavItem";
import OrangeLine from "../../../components/OrangeLine";
import {ListItem} from "@mui/material";

const selectedOrangeLineSx = {
    transitionDuration: "0.5s",
    position: "relative",
    right: "60px"
}

const orangeLineSx = {
    transitionDuration: "0.3s",
    position: "relative",
    right: "100px",
}

const listItemSx = {
    cursor: "pointer",
    paddingY: "15px",
}


export default function SidebarNavItem({name, link, color}) {

    const [selected, setSelected] = useState(false);
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    const onclick = () => {
        console.log('nav transfer')
    }

    return (
        <ListItem onclick={onclick} sx={listItemSx} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <OrangeLine sx={hover ? selectedOrangeLineSx : orangeLineSx}/>
            <NavItem color={hover ? "orange" : "black"} link={link} name={name}/>
        </ListItem>

    )
}