import React, {useState} from "react"
import {Box, Grid} from "@mui/material";
import {ShowcaseProduct} from "../features/products/index";
import {productsList as PL} from "../data/productData"

export default function Home() {

    const [productsList] = useState(PL())

    return (
        <Box>

            {/*3 and 1 column gird*/}
            <Grid display={{"xs": "flex", "md": "none", "lg": "flex"}} container>
                <Grid xs={12} md={6} lg={4}>
                    {productsList.slice(productsList.length / 3 * 2).map((product, index) => {
                        return <ShowcaseProduct product={product} isBigger={(index + 1) % 3 === 0}/>
                    })}
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    {productsList.slice(productsList.length / 3, (productsList.length / 3) * 2).map((product, index) => {
                        return <ShowcaseProduct product={product} isBigger={(index + 2) % 3 === 0}/>
                    })}
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    {productsList.slice(0, productsList.length / 3).map((product, index) => {
                        return <ShowcaseProduct product={product} isBigger={(index + 3) % 3 === 0}/>
                    })}
                </Grid>
            </Grid>

            {/*2 column grid*/}
            <Grid display={{"xs": "none", "md": "flex", "lg": "none"}} container>
                <Grid xs={12} md={6}>
                    {productsList.slice(0, productsList.length / 2).map((product, index) => {
                        return <ShowcaseProduct product={product} isBigger={(index + 1) % 3 === 0}/>
                    })}
                </Grid>

                <Grid showlistData={12} md={6}>
                    {productsList.slice(productsList.length / 2).map((product, index) => {
                        return <ShowcaseProduct product={product} isBigger={(index + 2) % 3 === 0}/>
                    })}
                </Grid>
            </Grid>

        </Box>
    )
}