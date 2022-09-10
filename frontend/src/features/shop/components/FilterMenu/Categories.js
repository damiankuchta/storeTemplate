import React from "react"
import categoriesData from "../../../../data/categories";
import {FilterMenuItem} from "./FilterMenuItem";
import {Box} from "@mui/material";

export function Categories({category, setFilterField}) {

    const onClick = (category) => {
        setFilterField({category: category})
    }

    return <Box> {categoriesData.map((item) => {
        return <FilterMenuItem text={item} selected={category === item} onClick={() => onClick(item)}/>
    })} </Box>
}