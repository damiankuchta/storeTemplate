import React from "react"
import {Box, Grid} from "@mui/material";
import {productsList} from "../../../data/productData";
import ProductItem from "./ProductList/ProductItem";


export default function ProductList() {

    return (
        <Grid container>
            {productsList.map((item) => (
                <Grid xs={12} lg={6} item><ProductItem product={item}/></Grid>))
            }
        </Grid>
    )
}