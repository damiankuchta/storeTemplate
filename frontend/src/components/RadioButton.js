import React, {useEffect, useState} from "react"
import {FormControlLabel, Radio} from "@mui/material";

const noButtonSx = {
    "& > span:first-of-type ": {display: "none",},
}

export default function RadioButton({arrayItem, labelingComponent: LabelingComponent, sx, checkedSx, selected, noButton}) {

    const [isChecked, setIsChecked] = useState(selected === arrayItem)

    useEffect(() => {
        setIsChecked(arrayItem === selected)
    }, [arrayItem, selected])

    const label = React.cloneElement(LabelingComponent, {children: arrayItem}) || arrayItem
    return <FormControlLabel sx={{...sx, ...(isChecked && checkedSx), ...(noButton && noButtonSx)}}
                             control={<Radio/>}
                             label={label}
                             value={arrayItem}/>
}