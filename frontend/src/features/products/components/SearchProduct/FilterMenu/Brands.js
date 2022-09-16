import React from "react"
import {FormControl} from "@mui/material";
import HighlightedText from "../../../../../components/HighlightedText";
import DictList from "../../../../../components/DictList";
import CheckButton from "../../../../../components/CheckButton";

const fromControlLabelSx = {
    width: "100%",
    height: "30px"
}


const checkedSx = {
    color: "orange"
}


export default function Brands({brands, setFilters}) {

    const toggleCheck = (dictKey, value) => {
        setFilters(oldFilters => {
            let newFilters = oldFilters
            newFilters.brands[dictKey] = !value
            return {...newFilters}
        })
    }

    return (
        <DictList dict={brands} as={FormControl} >
            <CheckButton labelingComponent={<HighlightedText/>}
                         sx={fromControlLabelSx}
                         checkedSx={checkedSx}
                         onChange={toggleCheck}
                         />
        </DictList>
    )
}
