import React from "react"
import {Container, Grid} from "@mui/material";
import CartItem from "./CarList/CartItem";

const headerSx = {
    backgroundColor: "#f5f7fa",
    padding: "15px 0",
    margin:  "7px 0 18px 0",
    fontSize: "13px",
    fontWeight: "600",
    maxWidth: "98%"
}


export default function CartList({items}) {
    return (
        <React.Fragment>
            <Grid item container sx={headerSx} columns={17}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4} paddingX={"20px"}>Name</Grid>
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