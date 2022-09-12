import React from "react"
import DictList from "../../../../../components/DictList";
import {Checkbox, FormControlLabel, Radio} from "@mui/material";
import {Filter} from "./Filter";
import HighlightedText from "../../../../../components/HighlightedText";
import categoriesData from "../../../../../data/categories";
import ControlGroup from "../../../../../components/CheckboxGroup";
import CheckboxGroup from "../../../../../components/CheckboxGroup";

const fromControlLabelSx = {
    width: "100%",
    height: "30px"
}


export default function Brands({brands, setFilters}) {

    const toggleCheck = (key, value) => {
        setFilters(oldFilters => {
            let newFilters = oldFilters
            newFilters.brands[key] = !value
            return {...newFilters}
        })
    }

    return <CheckboxGroup labelWrapper={<HighlightedText/>}
                          items={brands}
                          setItem={toggleCheck}
                          control={<Checkbox/>}
                          ideButton/>
}