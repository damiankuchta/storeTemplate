import React from "react"
import {ListItem as L} from "@mui/material"

export default function ListItem(props) {

    const {key, as, children, arrayItem, dictKey, value, index, ...rest} = props

    return <L key={key} as={as || "li"} {...rest}> {React.cloneElement(children, {
        arrayItem: arrayItem,
        dictKey: dictKey,
        value: value,
        index: index,
    })} </L>


}