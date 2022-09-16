import React, {useEffect, useState} from "react"
import {Box, Typography} from "@mui/material";
import Button from "../../../components/Button";

const cartTotalSx = {
    backgroundColor: "#f5f7fa",
    padding: "20px",
    margin: "7px 20px",

    "& > *:not(h6)": {
        marginTop: "35px"
    }
}

const buttonSx = {
    width: "100%",
    height: "60px"
}

const lineSx = {
    display: "flex",
    justifyContent: "space-between"
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
            <Box sx={lineSx}><Typography>Subtotal: </Typography><Typography>{subtotal}</Typography></Box>
            <Box sx={lineSx}><Typography>Delivery: </Typography><Typography>Free</Typography></Box>
            <Box sx={lineSx}><Typography>Total: </Typography><Typography>{subtotal}</Typography></Box>
            <Button sx={buttonSx} onClick={checkout}>Checkout</Button>
        </Box>
    )
}