import React, {useState} from "react"
import {Box} from "@mui/material";
import PriceRange from "./FilterMenu/PriceRange";
import Brands from "./FilterMenu/Brands";
import {Categories} from "./FilterMenu/Categories";
import Colors from "./FilterMenu/Colors";

const filterMenuSx = {
    backgroundColor: "#f5f7fa",
    boxSizing: "border-box",
    height: {
         xs: "800px",
         md: "100%"
    },
    padding: "0 60px 0 40px",
    width: {
         xs: "100%",
         md: "230px"
    },
    "&> *": {
        paddingY: "20px",
    }


}

export default function FilterMenu({brands, category, colors, price, setFilterField, setFilters}) {

    return (
        <Box sx={filterMenuSx}>
            <Categories category={category} setFilterField={setFilterField}/>
            <Brands brands={brands} setFilters={setFilters}/>
            <Colors colors={colors} setFilterField={setFilterField}/>
            <PriceRange price={price} setFilterField={setFilterField}/>
        </Box>
    )
}