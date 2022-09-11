import React from "react"
import categoriesData from "../../../../../data/categories";
import {Filter} from "./Filter";
import {Box} from "@mui/material";
import ArrayList from "../../../../../components/ArrayList";

export function Categories({category, setFilterField}) {

    const onClick = (item) => {
        setFilterField({category: item})
    }

    return <ArrayList array={categoriesData} itemComponent={<Filter/>}
                      itemProps={{setFilterField: setFilterField, category: category, onClick: onClick}}/>
}