import {Box, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {itemsSelector} from "../features/cart";
import CartItem from "../features/cart/components/CartItem";


export default function Cart() {

    const items = useSelector(itemsSelector)

    return (
        <Box>
            <Grid container>
                <Grid item xs={8}>
                    <Grid item container>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={3}>Name</Grid>
                        <Grid item xs={3}>Price</Grid>
                        <Grid item xs={3}>Quantity</Grid>
                    </Grid>
                    {items.map((item) => {
                        return <CartItem item={item}/>
                    })}
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </Box>
    )
}