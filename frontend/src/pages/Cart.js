import {Box} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {itemsSelector} from "../features/cart";

export default function Cart() {

    const dispatch = useDispatch()
    const items = useSelector(itemsSelector)

    console.log(items)

    return (
        <Box>
            {items.map((item) => {
                return item.title
            })}
        </Box>
    )
}