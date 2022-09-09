import React from "react"
import HighlightedText from "../../../../components/HighlightedText";

const FilterMenuItemSx = {
    cursor: "pointer"
}

export function FilterMenuItem({text}) {
    return (
        <HighlightedText sx={FilterMenuItemSx}>
            {text}
        </HighlightedText>
    )
}