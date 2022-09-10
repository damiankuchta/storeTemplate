import React from 'react'
import {Checkbox, FormControlLabel} from "@mui/material";
import {FilterMenuItem} from "./FilterMenuItem";

const fromControlLabelSx = {
    width: "100%",
    height: "30px"
}

export default function CheckBoxFilterMenuItem({name, checked, setFilters}) {

    const toggleCheck = (event) => {
        setFilters(oldFilters => {
            let newFilters = oldFilters
            newFilters.brands[name] = event.target.checked
            return {...newFilters}
        })
    }


    return <FormControlLabel sx={fromControlLabelSx} onChange={toggleCheck} checked={checked} control={<Checkbox/>}
                             label={<FilterMenuItem text={name}/>} disableTypography/>
}