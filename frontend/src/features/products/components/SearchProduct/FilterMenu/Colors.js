import React from "react"
import ColorCircle from "./ColorCircle";
import CheckboxGroup from "../../../../../components/CheckboxGroup";

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

    const toggleColor = (key, value) => {
        setFilterField({colors: {...colors, [key]: !value}})
    }

    return <CheckboxGroup checkButtonSx={colorItemSx}
                          formControlSx={ColorListSx}
                          items={colors}
                          setItem={toggleColor}
                          labelWrapper={<ColorCircle/>} hideTextLabel hideCheckbox/>

}


