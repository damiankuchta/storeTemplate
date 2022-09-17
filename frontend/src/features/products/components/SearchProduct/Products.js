import React, {useState} from "react"
import {productsListRandom} from "../../../../data/productData";
import Product from "./Products/Product";
import ArrayList from "../../../../components/ArrayList";
import ListItem from "../../../../components/ListItem";
import {Grid} from "@mui/material";


export default function Products() {

    const [products] = useState(productsListRandom())

    return (
        <ArrayList array={products} as={Grid} keyField={'productID'} container>
            <ListItem as={Grid} xs={12} md={6} lg={4} disablePadding item>
                <Product/>
            </ListItem>
        </ArrayList>
    )
}