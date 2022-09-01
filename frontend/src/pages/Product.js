import React, {useEffect, useState} from "react"
import {Grid} from "@mui/material";
import product from "../data/productData"
import {ProductInfo, AddToBasket, Pictures} from "../features/products/index";
import Box from "@mui/material/Box";
import OrangeLine from "../components/OrangeLine";

const productBoxSx = {
    padding: "10px",
    marginTop: {"sm": "150px", "xs": "100px"},

}

export default function Product() {

    const [products, setProducts] = useState(product)
    const [currentVariant, setCurrentVariant] = useState({})

    useEffect(() => {
        setCurrentVariant(product.variants[0])
    }, [product])

    return (
        <Box sx={productBoxSx}>
            {/*todo: <Breadcrumbs title={products.title}/>*/}
            <Grid container spacing={10}>
                <Grid xs={12} md={7} item>
                    <Pictures variant={currentVariant}
                              products={products}
                              setCurrentVariant={setCurrentVariant}/>
                </Grid>

                <Grid xs={12} md={5} item>
                    <OrangeLine/>
                    <ProductInfo product={product} currentVariatn={currentVariant}/>
                    <AddToBasket variant={currentVariant}/>
                </Grid>
            </Grid>
        </Box>
    )
}