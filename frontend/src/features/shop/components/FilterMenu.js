import React, {useState} from "react"
import {Box} from "@mui/material";
import PriceRange from "./FilterMenu/PriceRange";
import Brands from "./FilterMenu/Brands";
import {Categories} from "./FilterMenu/Categories";
import ColorList from "./FilterMenu/ColorList";

const filterMenuSx = {
    backgroundColor: "#f5f7fa",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    paddingX: "50px"
}

export default function FilterMenu({brands, category, colors, price, setFilterField, setFilters}) {

    return (
        <Box sx={filterMenuSx}>
            <Categories category={category} setFilterField={setFilterField}/>
            <Brands brands={brands} setFilters={setFilters}/>
            <ColorList colors={colors} setFilterField={setFilterField}/>
            <PriceRange price={price} setFilterField={setFilterField}/>
        </Box>
    )
}