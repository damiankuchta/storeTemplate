import React from "react"
import {Button} from "@mui/material";

export default function AddToBasket({variant, quantity}) {

    const addToBasketClick = () => {
        console.log("add variant:", variant)
        console.log("quantity: ", quantity)
    }

    return (
        <Button onClick={addToBasketClick}>Add to cart</Button>
    )
}