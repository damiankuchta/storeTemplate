import React, {useEffect, useState} from "react"
import Image from "../../../../components/Image"
import {Container, Grid} from "@mui/material";
import QuantityPicker from "../../../../components/QuantityPicker";
import {useDispatch} from "react-redux";
import {addItem} from "../../cartSlice";

const cartItemSx = {
    marginBottom: "10px",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "600",
    maxWidth: "98%"
}

const imageSx = {
    width: "100%",
}

export default function CartItem({item}) {

    const [quantity, setQuantity] = useState(item.quantity)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addItem({product: item.product, quantity: quantity}))
    }, [quantity])

    return (
        <Grid container item columns={18} sx={cartItemSx}>
            <Grid xs={4}> <Image sx={imageSx} src={item.product.image}/></Grid>
            <Grid xs={4}  paddingX={"20px"}> {item.product.title}</Grid>
            <Grid xs={4}> ${item.product.price}</Grid>
            <Grid xs={4}> <QuantityPicker quantity={quantity} setQuantity={setQuantity} allowZero/></Grid>
        </Grid>


    )
}