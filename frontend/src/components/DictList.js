import React from "react"
import mapDictionary from "../utils/mapDictionary";
import {List, ListItem} from "@mui/material";

export default function DictList({dict, itemComponent, listItemProps, listProps, itemProps}) {

    return <List {...listProps} disablePadding>{mapDictionary(dict, (key, value, index) => {
        return <ListItem key={key + index} disablePadding {...listItemProps}>
            {React.cloneElement(itemComponent, {
                ...itemProps,
                dictKey: key,
                value: value,
                onClick: () => {
                    typeof (itemProps.onClick) === "function" && itemProps.onClick(key, value)
                }
            })}</ListItem>
    })}</List>
}