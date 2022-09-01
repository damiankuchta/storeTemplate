import React, {useEffect, useState} from "react"
import {Button, Grid, Typography} from "@mui/material";
import QuantityPicker from "../../../../components/QuantityPicker";
import product from "../../../../data/productData"
import Pictures from "./Pictures";
import AddToBasket from "./AddToBasket";
import StarsRaiting from "./StarsRaiting";
import PriceTag from "./PriceTag";
import OrangeLine from "../../../../components/OrangeLine";
import IsInStock from "./IsInStock";
import BreadCrumbs from "./BreadCrumbs";
import Box from "@mui/material/Box";


const productBoxSx = {
    padding: "10px",
    marginTop: {"sm": "150px", "xs": "100px"}
}

export default function Product() {

    const [products, setProducts] = useState(product)
    const [quantity, setQuantity] = useState(0);
    const [currentVariant, setCurrentVariant] = useState({})

    useEffect(() => {
        setCurrentVariant(product.variants[0])
    }, [product])

    return (
        <Box sx={productBoxSx}>

            <Grid container spacing={10}>
                <Grid xs={12} md={7} item>
                    <BreadCrumbs title={products.title}/>
                    <Pictures variant={currentVariant}
                              products={products}
                              setCurrentVariant={setCurrentVariant}/>
                </Grid>

                <Grid xs={12} md={5} item>
                    <OrangeLine/>
                    <PriceTag price={currentVariant.price}/>
                    <Typography>{products.title}</Typography>
                    <Typography>{products.description}</Typography>
                    <StarsRaiting value={products.rating}/>
                    <IsInStock isInStock={currentVariant.isInStock}/>
                    <QuantityPicker
                        setQuantity={setQuantity}
                        quantity={quantity}/>
                    <AddToBasket variant={currentVariant}
                                 quantity={quantity}>Add to cart</AddToBasket>

                </Grid>
            </Grid>
        </Box>
    )
}