import React from "react"
import categoriesData from "../../../../data/categories";
import {FilterMenuItem} from "./FilterMenuItem";

export function Categories({}) {

    return categoriesData.map((item) => {
        return <FilterMenuItem text={item}/>
    })
}