import React, {useEffect, useMemo} from "react"
import {List} from "@mui/material";

export default function ArrayList(props) {

    const {as, array, keyField, children, ...rest} = props


    useEffect(() => {
        React.Children.only(children)
        React.isValidElement(children)
    }, [])

    return (
        <List as={as || "ul"} {...rest}>
            {array.map((arrayItem) =>
                React.cloneElement(children, {key: (arrayItem?.[keyField] || arrayItem), arrayItem: arrayItem})
            )}
        </List>
    )
}
