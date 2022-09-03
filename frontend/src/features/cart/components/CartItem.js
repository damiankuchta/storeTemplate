import React, {useEffect, useState} from "react"
import Image from "../../../components/Image"
import {Grid} from "@mui/material";
import QuantityPicker from "../../../components/QuantityPicker";
import {useDispatch} from "react-redux";
import {addItem} from "../cartSlice";

const imageSx = {
    width: "100%"
}

export default function CartItem({item}) {

    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addItem({product: item.product, quantity: quantity}))
    },[quantity])

    return (
        <Grid container item>
            <Grid xs={3}> <Image sx={imageSx} src={item.product.image}/></Grid>
            <Grid xs={3}> {item.product.title}</Grid>
            <Grid xs={3}> {item.product.price}</Grid>
            <Grid xs={3}> <QuantityPicker quantity={quantity} setQuantity={setQuantity}/></Grid>
        </Grid>


    )
}