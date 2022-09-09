import React from 'react'
import {Checkbox, FormControlLabel} from "@mui/material";
import {FilterMenuItem} from "./FilterMenuItem";

export default function CheckBoxFilterMenuItem({name, checked, setFilters}) {

    const toggleCheck = () => {
        setFilters(oldFilters => {
            let newFilters = oldFilters
            newFilters.brands[name] = !newFilters.brands[name]
            return {...newFilters}
        })
    }
    return <FormControlLabel control={<Checkbox checked={checked}
                                                onChange={toggleCheck}/>}
                             label={<FilterMenuItem text={name}/>}/>
}