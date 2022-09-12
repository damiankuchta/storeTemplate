import React from "react"
import {Checkbox, FormControl, FormControlLabel, Radio, RadioGroup as RG} from "@mui/material";
import mapDictionary from "../utils/mapDictionary";

const hideButtonSx = {
    "& > span:first-child ": {display: "none",}
}

export default function CheckboxGroup({
                                          items,
                                          setItem,
                                          formControlSx,
                                          checkButtonSx,
                                          labelWrapper,
                                          hideCheckbox,
                                          hideTextLabel
                                      }) {

    const onChange = (key, value) => {
        setItem(key, value)
    }

    return (
        <FormControl sx={formControlSx}>
            {mapDictionary(items, (key, value, index) => {
                const label = labelWrapper ? React.cloneElement(labelWrapper, {
                    isSelected: value,
                    dictKey: key,
                    value: value,
                    ...(!hideTextLabel && {children: key}),
                }) : key
                return <FormControlLabel onChange={() => onChange(key, value)}
                                         sx={{...checkButtonSx, ...(hideCheckbox && hideButtonSx)}}
                                         value={value}
                                         checked={value}
                                         control={<Checkbox/>}
                                         label={label}/>
            })}
        </FormControl>
    )
}