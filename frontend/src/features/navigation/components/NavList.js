import React from "react"
import {List, ListItem} from "@mui/material";

import menu from "../../../data/menu";
import mapDictionary from "../../../utils/mapDictionary";
import NavItem from "./NavItem";
import SidebarNavItem from "./SidebarNavItem";

const footerSpacingSx = {
    paddingX: "40px"
}


const footerListSx = {
    display: "flex",
    flexDirection: "row",
}

export default function NavList({sideBar}) {

    return (
        <List sx={!sideBar && footerListSx}>
            {mapDictionary(menu, (item, value) => {
                return (
                    sideBar ?
                        <SidebarNavItem link={value} name={item} color={"black"}/>
                        :
                        <ListItem sx={footerSpacingSx}>
                            <NavItem link={value} name={item} color={"white"} upperCase/>
                        </ListItem>
                )
            })

            }
        </List>
    )
}