import React from "react"
import {productsList} from "../../../../data/productData";
import Product from "./Products/Product";
import ArrayList from "../../../../components/ArrayList";

const listSx = {
    width: "100%"
}

export default function Products() {
    return (
        <ArrayList array={productsList} listProps={{sx: listSx}} itemComponent={<Product/>} listItemProps={{xs: 12, md: 6}} grid/>
    )
}