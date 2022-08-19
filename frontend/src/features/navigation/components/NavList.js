import React from "react"
import {List, ListItem} from "@mui/material";

import menu from "../../../data/menu";
import mapDictionary from "../../../utils/mapDictionary";
import NavItem from "./NavItem";


export default function NavList({color, isHorizontal, spacing, sx, animated}) {

    const navLinkSpacing = {
        padding: isHorizontal ? `0 ${spacing}px` : `${spacing}px 0`
    }

    return (
        <List sx={sx}>
            {mapDictionary(menu, (item, value) => {
                    return <ListItem sx={navLinkSpacing}><NavItem animated={animated} link={value} name={item} color={color}/></ListItem>
                })

            }
        </List>
    )
}