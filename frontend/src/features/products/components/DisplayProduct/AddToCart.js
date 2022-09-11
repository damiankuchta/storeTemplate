import React from "react"
import QuantityPicker from "../../../../components/QuantityPicker";
import Button from "../../../../components/Button";
import {Box} from "@mui/material";

const addToBaskerSx = {
    "& > *": {
        marginBottom: "50px"
    }
}

const buttonSx = {
    width: "310px",
    height: "80px",
}


export default function AddToCart({quantity, setQuantity}) {

    return (
        <Box sx={addToBaskerSx}>
            <QuantityPicker setQuantity={setQuantity} quantity={quantity}/>
            <Button type={"submit"} sx={buttonSx}>Add to cart</Button>
        </Box>
    )
}