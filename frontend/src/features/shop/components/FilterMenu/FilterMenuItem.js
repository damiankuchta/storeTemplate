import React from "react"
import HighlightedText from "../../../../components/HighlightedText";

const FilterMenuItemSx = {
    cursor: "pointer",
    width: "100%"
}

export function FilterMenuItem({text, selected, onClick}) {
    return (
        <HighlightedText onClick={onClick} selected={selected} sx={FilterMenuItemSx}>
            {text}
        </HighlightedText>
    )
}