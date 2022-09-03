import React, {useState} from "react"
import {Button} from "@mui/material";
import QuantityPicker from "../../../components/QuantityPicker";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {addItem} from "../../cart/index";

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

export default function AddToBasket({currentVariant}) {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1);

    const addToBasketClick = () => {
        dispatch(addItem({quantity: quantity, product: currentVariant}))
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