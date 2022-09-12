import React from "react"
import categoriesData from "../../../../../data/categories";
import RadioGroup from "../../../../../components/RadioGroup";
import HighlightedText from "../../../../../components/HighlightedText";

const CategoryMenuSx = {
    padding: "10px",
    width: "100%"

}


export function Categories({category, setFilterField}) {

    const setItem = (item) => {
        setFilterField({category: item})
    }

    return <RadioGroup labelWrapper={<HighlightedText/>}
                       formControlSx={CategoryMenuSx}
                       items={categoriesData}
                       selected={category} setItem={setItem}
                       hideButton/>
}