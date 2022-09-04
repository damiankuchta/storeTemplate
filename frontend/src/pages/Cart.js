import {Box, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {itemsSelector} from "../features/cart";
import CartList from "../features/cart/components/CartList";
import CartTotal from "../features/cart/components/CartTotal";

const carstSx = {
    marginTop: "150px",
    marginBottom: "150px"
}

export default function Cart() {

    const items = useSelector(itemsSelector)

    return (
        <Box sx={carstSx}>
            <Typography margin={"20px"} variant={"h4"}>Shopping Cart</Typography>
            <Grid container>
                <Grid item xs={9}>
                    <CartList items={items}/>
                </Grid>
                <Grid item xs={3}>
                    <CartTotal items={items}/>
                </Grid>
            </Grid>
        </Box>
    )
}