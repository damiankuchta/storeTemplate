import React from "react"
import ColorCircle from "./ColorCircle";
import DictList from "../../../../../components/DictList";
import {FormControl} from "@mui/material";
import CheckButton from "../../../../../components/CheckButton";
import HighlightedText from "../../../../../components/HighlightedText";

const ColorListSx = {
    display: "grid",
    justifyItems: "stretch",
    alignItems: "stretch",
    gridTemplateColumns: "repeat(4, 25%)",
    gridGap: "5px",
    width: "150px",

}

const colorItemSx = {
    transitionDuration: "0.3s",
    "&:hover": {
        transitionDuration: "0.3s",
        transform: "scale(1.3)"
    }
}

export default function Colors({colors, setFilterField}) {

    const toggleColor = (dictKey, value) => {
        setFilterField({colors: {...colors, [dictKey]: !value}})
    }

    return <DictList dict={colors} as={FormControl} sx={ColorListSx}>
        <CheckButton labelingComponent={<ColorCircle/>}
                     sx={colorItemSx}
                     onChange={toggleColor}
                     noButton
        />
    </DictList>

}


