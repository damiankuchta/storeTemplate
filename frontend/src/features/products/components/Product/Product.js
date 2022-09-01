import React, {useEffect, useState} from "react"
import {Grid} from "@mui/material";
import product from "../../../../data/productData"
import Pictures from "./Pictures";
import AddToBasket from "./AddToBasket";
import OrangeLine from "../../../../components/OrangeLine";
import BreadCrumbs from "./BreadCrumbs";
import ProductInfo from "./ProductInfo/index";
import Box from "@mui/material/Box";


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
            {/*<BreadCrumbs title={products.title}/>*/}
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