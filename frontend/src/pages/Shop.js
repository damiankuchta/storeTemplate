import React, {useEffect, useState} from "react"
import FilterMenu from "../features/shop/components/FilterMenu";
import {Grid} from "@mui/material";
import brands from "../data/brands";
import colors from "../data/colors";
import ProductList from "../features/shop/components/ProductList";


export default function Shop() {

    const [filters, setFilters] = useState({
        brands: {},
        category: "",
        colors: {},
        price: [1, 1000],
    })

    const [displayType, setDisplayType] = useState("tiles")
    const [sortBy, setSortBy] = useState("Date")
    const [view, setView] = useState(12)

    //set brands dict
    useEffect(() => {
        let newBrands = filters.brands
        brands.forEach(item => {
            newBrands[item] = true
        })
        setFilterField({brands: newBrands})
    }, [])

    //set colors dict
    useEffect(() => {
        let newColors = filters.colors
        colors.forEach(item => {
            newColors[item] = true
        })
        setFilterField({colors: newColors})
    }, [])

    const setFilterField = (value) => {
        setFilters((oldFilters) => {
            return {...oldFilters, ...value}
        })
    }

    return (
        <Grid container columns={40}>
            <Grid width={"230px"} xs={40} sm={10} md={10} lg={8} xl={6} item><FilterMenu {...filters} setFilterField={setFilterField}
                                                           setFilters={setFilters}/></Grid>
            <Grid xs={40} sm={30} md={30} lg={32} xs={34} item><ProductList/></Grid>
        </Grid>
    )
}

