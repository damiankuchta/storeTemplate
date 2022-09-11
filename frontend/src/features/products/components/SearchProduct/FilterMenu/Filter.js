import React from "react"
import HighlightedText from "../../../../../components/HighlightedText";

const FilterMenuItemSx = {
    cursor: "pointer",
    width: "100%"
}

export function Filter({item: text,  onClick, category}) {

    return (
        <HighlightedText onClick={onClick} selected={category === text} sx={FilterMenuItemSx}>
            {text}
        </HighlightedText>
    )
}