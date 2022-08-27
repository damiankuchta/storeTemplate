import React, {useEffect, useState} from "react"
import {Breadcrumbs, Button, Grid, Link, List, ListItem, Typography} from "@mui/material";
import {randomPicture} from "../../../utils/randomPicture";
import Image from "../../../components/Image";


const product = {
    title: "Random title",
    description: "Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.",
    variants: [
        {
            price: 200,
            image: randomPicture(),
            isInStock: true
        },
        {
            price: 200,
            image: randomPicture(),
            isInStock: true
        },
        {
            price: 200,
            image: randomPicture(),
            isInStock: true
        },
        {
            price: 200,
            image: randomPicture(),
            isInStock: true
        },
    ]
}


const mainPictureSx = {
    width: "100%",
}

const smallPictureSx = {
    width: "24%",
}

const imagesListSx = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

}


export default function Product() {

    const [products, useProducts] = useState(product)
    const [quantity, setQuantity] = useState(0);
    const [currentVariant, setCurrentVariant] = useState({})

    const changeQuantity = (quantity) => {
        setQuantity(old => {
            const total = old + quantity
            return total > 0 ? total : 0
        })
    }

    const changeCurrentVariant = (index) => {
        setCurrentVariant(products.variants[index])
    }

    useEffect(() => {
        setCurrentVariant(product.variants[0])
    }, [product])

    return (
        <React.Fragment>

            <Grid container spacing={10}>
                <Grid xs={7} item>
                    <Breadcrumbs>
                        <Link underline={'hover'}>Home</Link>
                        <Link underline={'hover'}>Furniture</Link>
                        <Link underline={'hover'}>Chairs</Link>
                        <Link underline={'hover'}>{product.title}</Link>
                    </Breadcrumbs>
                    <Image src={currentVariant.image} sx={mainPictureSx}/>
                    <List sx={imagesListSx}>
                        {products.variants.map(({image}, index) => {
                            return <Image sx={smallPictureSx} src={image} as={'img'} onClick={() => changeCurrentVariant(index)}/>
                        })}
                    </List>

                </Grid>
                <Grid xs={5} item>
                    <Typography>{product.title}</Typography>
                    <Typography>{product.description}</Typography>
                    <Button onClick={() => changeQuantity(1)}>Add quantity</Button>
                    <Button onClick={() => changeQuantity(-1)}>Remove quantityt</Button>
                    <Button>Add</Button>
                </Grid>
            </Grid>


            {/*    navigation > Home > Funtiyutre*/}

            {/*    variants picks*/}
            {/*    starts*/}
            {/*    quantity*/}
            {/*    add variatn to cart button*/}
        </React.Fragment>
    )
}