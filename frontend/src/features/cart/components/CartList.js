import React from "react"
import {Container, Grid} from "@mui/material";
import CartItem from "./CarList/CartItem";

const headerSx = {
    backgroundColor: "#f5f7fa",
    padding: "15px",
    margin: "7px",
    marginBottom: "18px",
    fontSize: "13px",
    fontWeight: "600"

}


export default function CartList({items}) {
    return (
        <React.Fragment>
            <Grid item container sx={headerSx} columns={17}>
                <Grid item xs={4} marginRight={"35px"}></Grid>
                <Grid item xs={4}>Name</Grid>
                <Grid item xs={4}>Price</Grid>
                <Grid item xs={4}>Quantity</Grid>
            </Grid>
            {
                items.map((item) => {
                    return <Container><CartItem item={item}/></Container>
                })
            }
        </React.Fragment>
    )
}