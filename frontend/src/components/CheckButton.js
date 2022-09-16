import React from "react"
import {Checkbox, FormControlLabel} from "@mui/material";

const noButtonSx = {
    "& > span:first-of-type ": {display: "none",}
}

export default function CheckButton({
                                        labelingComponent: LabelingComponent, dictKey,
                                        value, sx, noButton, checkedSx, onChange, onClick
                                    }) {

    const label = React.cloneElement(LabelingComponent, {children: dictKey, value: value}) || dictKey
    return <FormControlLabel sx={{...sx, ...(value && checkedSx), ...(noButton  && noButtonSx)}}
                             control={<Checkbox/>}
                             label={label}
                             value={value}
                             checked={value}
                             onChange={() => {onChange && onChange(dictKey, value) }}
                             onClick={() => { onClick && onClick(dictKey, value)}}
    />
}