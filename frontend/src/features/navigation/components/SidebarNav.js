import React from "react"
import DictList from "../../../components/DictList";
import menu from "../../../data/menu";
import SidebarNavItem from "./SideBarNavItem";
import ListItem from "../../../components/ListItem";


export default function SidebarNav() {

     return (
         <DictList dict={menu}>
             <ListItem>
                 <SidebarNavItem/>
             </ListItem>
         </DictList>
         )



}