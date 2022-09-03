import React, {useState} from "react"
import NavItem from "./NavItem";
import OrangeLine from "../../../components/OrangeLine";
import {ListItem} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

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


export default function SidebarNavItem({name, link}) {

    const [hover, setHover] = useState(false);
    const navigate = useNavigate()

    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    const onClick = () => {
        navigate(link, {replace: true})
    }

    return (
        <ListItem onClick={onClick} sx={listItemSx} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
            <OrangeLine sx={hover ? selectedOrangeLineSx : orangeLineSx}/>
            <NavItem color={hover ? "orange" : "black"} name={name}/>
        </ListItem>

    )
}