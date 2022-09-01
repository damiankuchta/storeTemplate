import React, {useState} from "react"
import {Button} from "@mui/material";
import QuantityPicker from "../../../../components/QuantityPicker";
import Box from "@mui/material/Box";

const addToBaskerSx = {
    "& > *": {
        marginBottom: "50px"
    }
}

const buttonSx = {
    backgroundColor: "orange",
    color: "white",
    width: "310px",
    height: "80px",

    "&:hover": {
        backgroundColor: "black",
    },
}

export default function AddToBasket({variant}) {

    const [quantity, setQuantity] = useState(1);

    const addToBasketClick = () => {
        console.log("add variant:", variant)
        console.log("quantity: ", quantity)
    }

    return (
        <Box sx={addToBaskerSx}>
            <QuantityPicker
                setQuantity={setQuantity}
                quantity={quantity}/>
            <Button sx={buttonSx} onClick={addToBasketClick}>Add to cart</Button>
        </Box>

    )
}