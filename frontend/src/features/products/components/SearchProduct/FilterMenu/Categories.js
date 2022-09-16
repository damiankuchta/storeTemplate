import React from "react"
import categoriesData from "../../../../../data/categories";
import {RadioGroup} from "@mui/material";
import HighlightedText from "../../../../../components/HighlightedText";
import RadioButton from "../../../../../components/RadioButton";
import ArrayList from "../../../../../components/ArrayList";

const CategoryMenuSx = {
    padding: "10px",
    width: "100%"

}

const checkedSx = {
    color: "orange"
}


export function Categories({category, setFilterField}) {

    const changeSelections = (event) => {
        setFilterField({category: event.target.value})
    }

    return (
        <ArrayList array={categoriesData}
                   as={RadioGroup}
                   sx={CategoryMenuSx}
                   value={category}
                   onChange={changeSelections}>

            <RadioButton labelingComponent={<HighlightedText/>}
                         checkedSx={checkedSx}
                         selected={category}
                         noButton/>
        </ArrayList>
    )
}

