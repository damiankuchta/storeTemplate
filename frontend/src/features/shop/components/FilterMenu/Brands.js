import React from "react"
import CheckBoxFilterMenuItem from "./CheckBoxFilterMenuItem";
import mapDictionary from "../../../../utils/mapDictionary";
import {Box} from "@mui/material";

export default function Brands({brands, setFilters}) {


    return <Box> {mapDictionary(brands, (key, value) => {
        return <CheckBoxFilterMenuItem setFilters={setFilters} name={key} checked={value}/>
    })}</Box>
}