import React, {useEffect} from "react"
import mapDictionary from "../utils/mapDictionary";
import {List, ListItem} from "@mui/material";

export default function DictList(props) {

    const {dict, keyField, keyTemplate, children, ...rest} = props

    useEffect(() => {
        React.Children.only(children)
        React.isValidElement(children)
    }, [])

    return <List {...rest}>
        {mapDictionary(dict, (dictKey, value) => React.cloneElement(children, {
            key: (dict?.[keyField] || keyTemplate && dictKey+keyTemplate ||dictKey),
            dictKey: dictKey,
            value: value
        }))}
    </List>

}