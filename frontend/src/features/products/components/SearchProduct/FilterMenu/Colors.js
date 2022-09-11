import React from "react"
import ColorCircle from "./ColorCircle";
import DictList from "../../../../../components/DictList";

const ColorListSx = {
    display: "grid",
    justifyItems: "stretch",
    alignItems: "stretch",
    gridTemplateColumns: "repeat(4, 25%)",
    gridGap: "5px",
    width: "100%",
}

export default function Colors({colors, setFilterField}) {

    const toggleColor = (color) => {
        setFilterField({colors: {...colors, [color]: !colors[color]}})
    }

    return <DictList dict={colors}
                     itemComponent={<ColorCircle/>}
                     listProps={{sx: ColorListSx}}
                     itemProps={{onClick: toggleColor}}/>

}

// <Box sx={ColorListSx}>{MapDictionary(colors, (key, value) => {
//     return <ColorCircle onClick={() => toggleColor(key)} selected={value} color={key}/>
// })
//
// }</Box>
