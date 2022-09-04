import React, {useEffect, useState} from "react"
import {Box, Typography} from "@mui/material";
import Button from "../../../components/Button";

const cartTotalSx = {
    backgroundColor: "#f5f7fa",
    padding: "20px",
    margin: "7px 20px",
}

export default function CartTotal({items}) {

    const [subtotal, setSubtotal] = useState()

    useEffect(() => {
        setSubtotal(() => {
            return items.reduce((previousValue, item) => {
                return previousValue + (item.quantity * item.product.price)
            }, 0)
        })
    }, [items])

    const checkout = () => {

    }

    return (
        <Box sx={cartTotalSx}>
            <Typography variant={'h6'}>Cart Total</Typography>
            <Typography>Subtotal: {}</Typography>
            <Typography>Delivery: $10</Typography>
            <Typography>Total: {subtotal}</Typography>
            <Button onClick={checkout}>Checkout</Button>
        </Box>
    )
}