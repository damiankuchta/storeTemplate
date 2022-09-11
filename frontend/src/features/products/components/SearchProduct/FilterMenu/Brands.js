import React from "react"
import DictList from "../../../../../components/DictList";
import {Checkbox, FormControlLabel} from "@mui/material";
import {Filter} from "./Filter";

const fromControlLabelSx = {
    width: "100%",
    height: "30px"
}

const CheckBoxFilterMenuItem = ({dictKey: name, value: checked, setFilters}) => {

    const toggleCheck = (event) => {
        setFilters(oldFilters => {
            let newFilters = oldFilters
            newFilters.brands[name] = event.target.checked
            return {...newFilters}
        })
    }
    return <FormControlLabel sx={fromControlLabelSx} onChange={toggleCheck} checked={checked} control={<Checkbox/>}
                             label={<Filter item={name}/>} disableTypography/>
}


export default function Brands({brands, setFilters}) {
    return <DictList dict={brands} itemComponent={<CheckBoxFilterMenuItem/>} itemProps={{setFilters: setFilters}}/>
}