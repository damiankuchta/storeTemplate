import React, {useState} from "react"
import {useDispatch} from "react-redux";
import {addItem} from "../../index";

export default function AddToCart({currentVariant, component}) {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1);

    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(addItem({quantity: quantity, product: currentVariant}))
    }

    return (
        <form onSubmit={onSubmit}>
            {React.cloneElement(component, {quantity: quantity, setQuantity: setQuantity})}
        </form>
    )
}