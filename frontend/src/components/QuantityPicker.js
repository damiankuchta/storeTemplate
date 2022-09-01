import React from "react"
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";

export default function QuantityPicker({quantity, setQuantity}) {

    const changeQuantity = (quantity) => {
        setQuantity(old => {
            const total = old + quantity
            return total > 0 ? total : 0
        })
    }

    return (
        <Box as={'span'}>
            <Typography>
                Qty: {quantity}
            </Typography>
            <Button onClick={() => changeQuantity(1)}>Up</Button>
            <Button onClick={() => changeQuantity(-1)}>Down</Button>
        </Box>
    )
}