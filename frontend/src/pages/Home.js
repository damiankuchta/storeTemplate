import React, {useEffect, useState} from "react"
import {Grid} from "@mui/material";
import {productsListRandom as PL} from "../data/productData"
import ProductColumn from "../features/products/components/ShowCase/ProductColumn";

export default function Home() {

    const [productsList] = useState(PL())
    const [firstColumn, setFirstColumn] = useState([])
    const [secondColumn, setSecondColumn] = useState([])
    const [thirdColumn, setThirdColumn] = useState([])

    //get amount of products for each column
    useEffect(() => {

        const extras = productsList.length % 3

        const first = productsList.slice(0, Math.ceil(productsList.length / 3))
        let second = productsList.slice(Math.ceil(productsList.length / 3), Math.ceil(productsList.length / 3 * 2))
        let third = productsList.slice(Math.ceil(productsList.length / 3 * 2))

        if (extras === 2) {
            third.push(productsList[0])
        } else if (extras === 1) {
            third.push(productsList[0])
            second.push(productsList[1])

        }

        setFirstColumn(first)
        setSecondColumn(second)
        setThirdColumn(third)

    }, [productsList])

    return (
        <Grid container>
            <Grid xs={12} lg={4} item>
                {firstColumn && <ProductColumn totalNumberInColumn={firstColumn.length}
                                               productList={firstColumn}
                                               biggerPictureEvery={0}/>}
            </Grid>

            <Grid xs={12} lg={4} item>
                {secondColumn && <ProductColumn totalNumberInColumn={secondColumn.length}
                                                productList={secondColumn}
                                                biggerPictureEvery={2}/>}
            </Grid>
            <Grid xs={12} lg={4} item>
                {thirdColumn && <ProductColumn totalNumberInColumn={thirdColumn.length}
                                               productList={thirdColumn}
                                               biggerPictureEvery={1}/>}
            </Grid>
        </Grid>
    )
}