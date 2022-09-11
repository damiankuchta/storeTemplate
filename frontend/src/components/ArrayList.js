import React from "react"
import {Grid, List, ListItem} from "@mui/material";

export default function ArrayList({array, itemComponent, listItemProps, listProps, itemProps, grid}) {

    return (
        <List {...listProps} as={grid ? Grid : "ul"} disablePadding container>
            {array.map((item, index) => {
                return (
                    <ListItem disablePadding {...listItemProps} key={item + index}  as={grid ? Grid : "li"} item>
                        {React.cloneElement(itemComponent, {
                            ...itemProps,
                            item: item,
                            onClick: () => {typeof(itemProps.onClick) === "function" && itemProps.onClick(item)},
                        })}
                    </ListItem>
                )
            })}
        </List>
    )
}
