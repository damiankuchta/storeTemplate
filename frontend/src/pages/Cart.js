import {Box, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {itemsSelector} from "../features/cart";
import CartItems from "../features/cart/components/CartItems";
import CartTotal from "../features/cart/components/CartTotal";

const carstSx = {
    marginTop: "150px",
    marginBottom: "150px"
}

export default function Cart() {

    const cartItems = useSelector(itemsSelector)

    return (
        <Box sx={carstSx}>
            <Typography margin={"20px"} variant={"h4"}>Shopping Cart</Typography>
            <Grid container>
                <Grid item xs={12} lg={8}>
                    <CartItems cartItems={cartItems}/>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <CartTotal items={cartItems}/>
                </Grid>
            </Grid>
        </Box>
    )
}