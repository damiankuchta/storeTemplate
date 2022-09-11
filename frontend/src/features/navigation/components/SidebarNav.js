import React from "react"
import DictList from "../../../components/DictList";
import menu from "../../../data/menu";
import SidebarNavItem from "./SideBarNavItem";

const listItemSx = {
    position: "relative",
    right: "80px",
    display: "block",
    textAlign: "left"
}

export default function SidebarNav({}) {
     return <DictList dict={menu} itemComponent={<SidebarNavItem/>} listItemProps={{sx: listItemSx}} />
}