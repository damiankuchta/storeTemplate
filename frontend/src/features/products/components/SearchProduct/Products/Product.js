import React from "react"
import {Box, Grid, Typography} from "@mui/material";
import Image from "../../../../../components/Image";
import PriceTag from "../../DisplayProduct/PriceTag";
import StarsRaiting from "../../ShowCase/ProductInfo/StarsRaiting";
import {Link} from "react-router-dom";
import {ShoppingCart} from "@mui/icons-material";

const ProductItemSx = {
    boxSizing: "border-box",
    width: "100%",
    padding: "10px",

}


const ProductItemFooterSx = {
    paddingTop: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",

}

const linkStyling = {
    color: "black",
    textDecoration: "none"
}

const ImageSx = {
    width: "100%",
}


export default function Product({arrayItem: product}) {

    const {title, rating, description, productID, variants, fromPrice, category, brand} = product

    return (
        <Grid sx={ProductItemSx} container>
            <Link to={`/product/${productID}`} style={linkStyling}><Image sx={ImageSx} src={variants[0].image}/></Link>
            <Box sx={ProductItemFooterSx}>
                <Link to={`/product/${productID}`} style={linkStyling}>
                    <PriceTag price={fromPrice}/>
                    <Typography fontWeight={550}>{title}</Typography>
                </Link>

                <Box>
                    <StarsRaiting value={rating}/>
                    {/*<AddToBasket currentVariant={variants[0]} icon={<ShoppingCart/>}/>*/}
                </Box>
            </Box>
        </Grid>

    )
}