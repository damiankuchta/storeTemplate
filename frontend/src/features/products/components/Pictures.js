import React from "react"
import Image from "../../../components/Image";
import {List} from "@mui/material";

const mainPictureSx = {
    width: "100%",
}

const smallPictureSx = {
    border: "3px solid transparent",
    width: "24%",
}

const imagesListSx = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

}


export default function Pictures({variant, products, setCurrentVariant}) {

    const changeCurrentVariant = (index) => {
        setCurrentVariant(products.variants[index])
    }

    return (
        <React.Fragment>
            <Image src={variant.image} sx={mainPictureSx}/>
            <List sx={imagesListSx}>
                {products.variants.map(({image, variantId}, index) => {
                    return <Image sx={variant.variantId === variantId  ? {...smallPictureSx, border: "3px solid orange"} : smallPictureSx} src={image} as={'img'}
                                  onClick={() => changeCurrentVariant(index)}/>
                })}
            </List>
        </React.Fragment>
    )
}