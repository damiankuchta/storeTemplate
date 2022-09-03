import React, {useEffect, useState} from "react"
import {Grid} from "@mui/material";
import {randomProduct} from "../data/productData"
import {ProductInfo, AddToBasket, Pictures} from "../features/products/index";
import Box from "@mui/material/Box";
import OrangeLine from "../components/OrangeLine";
import {useParams} from "react-router-dom";

const productBoxSx = {
    padding: "10px",
    marginTop: {"sm": "150px", "xs": "100px"},

}

export default function Product() {

    const [useProducts, setProducts] = useState(new randomProduct())
    const [currentVariant, setCurrentVariant] = useState({})
    let { id } = useParams();

    useEffect(() => {
        setCurrentVariant(useProducts.variants[0])
    }, [])

    useEffect(() => {
        console.log('fetch product by id', id)
    }, [])

    return (
        <Box sx={productBoxSx}>
            {/*todo: <Breadcrumbs title={products.title}/>*/}
            <Grid container spacing={10}>
                <Grid xs={12} md={7} item>
                    <Pictures currentVariant={currentVariant} variants={useProducts.variants}
                              setCurrentVariant={setCurrentVariant}/>
                </Grid>

                <Grid xs={12} md={5} item>
                    <OrangeLine/>
                    <ProductInfo currentVariatn={currentVariant} product={useProducts} />
                    <AddToBasket currentVariant={currentVariant} product={useProducts}/>
                </Grid>
            </Grid>
        </Box>
    )
}