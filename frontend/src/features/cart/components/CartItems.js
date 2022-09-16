import React, {useEffect, useState} from "react"
import {Grid} from "@mui/material";
import {useDispatch} from "react-redux";
import {addItem} from "../cartSlice";
import Image from "../../../components/Image";
import QuantityPicker from "../../../components/QuantityPicker";
import ArrayList from "../../../components/ArrayList";
import ListItem from "../../../components/ListItem";

const headerSx = {
    backgroundColor: "#f5f7fa",
    padding: "15px 0",
    margin: "7px 0 18px 0",
    fontSize: "13px",
    fontWeight: "600",
    maxWidth: "98%"
}

export default function CartItems({cartItems}) {
    return (
        <React.Fragment>
            <Grid item container sx={headerSx} columns={17}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>Name</Grid>
                <Grid item xs={4}>Price</Grid>
                <Grid item xs={4}>Quantity</Grid>
            </Grid>

            <ArrayList array={cartItems} keyField={'variantID'}>
                <ListItem>
                    <CartItem/>
                </ListItem>
            </ArrayList>

        </React.Fragment>
    )
}

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

function CartItem({arrayItem}) {

    const [quantity, setQuantity] = useState(arrayItem.quantity)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addItem({product: arrayItem.product, quantity: quantity, variantID: arrayItem.product.variantID}))
    }, [quantity])

    return (
        <Grid container item columns={18} sx={cartItemSx}>
            <Grid xs={4} item> <Image sx={imageSx} src={arrayItem.product.image}/></Grid>
            <Grid xs={4} paddingX={"20px"} item> {arrayItem.product.title}</Grid>
            <Grid xs={4} item> ${arrayItem.product.price}</Grid>
            <Grid xs={4} item> <QuantityPicker quantity={quantity} setQuantity={setQuantity} allowZero/></Grid>
        </Grid>
    )
}
