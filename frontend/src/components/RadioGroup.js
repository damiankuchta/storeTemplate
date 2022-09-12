import React from "react"
import {FormControl, FormControlLabel, Radio, RadioGroup as RG} from "@mui/material";

const hideButtonSx = {
    "& > span:first-child ": {display: "none",}
}

export default function RadioGroup({items, setItem, selected, formControlSx, radioButtonSx, labelWrapper, hideButton}) {

    const handleChane = (event) => {
        setItem(event.target.value)
    }
    
    return (
        <FormControl sx={formControlSx}>
            <RG valie={selected} onChange={handleChane}>
            {items.map((item) => {
                const label = labelWrapper ? React.cloneElement(labelWrapper, {children: item, isSelected: selected===item}) : item
                return <FormControlLabel sx={{...radioButtonSx, ...(hideButton && hideButtonSx)}} value={item} control={<Radio/>} label={label}/>
            })}
            </RG>
        </FormControl>
    )
}