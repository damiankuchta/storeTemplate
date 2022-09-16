import React from "react"
import Image from "../../../../components/Image";
import {Box} from "@mui/material";
import ArrayList from "../../../../components/ArrayList";
import VariantPicture from "./VariantPicutres";
import ListItem from "../../../../components/ListItem";


const mainPictureSx = {
    width: "100%",
}

const listSx = {
    display: "flex",
    flexWrap: "wrap"
}

const listItemSx = {
    width: "25%",
    padding: "2px"
}


export default function Pictures({currentVariant, variants, setCurrentVariant}) {

    return (
        <Box>
            <Image src={currentVariant.image} sx={mainPictureSx}/>
            <ArrayList array={variants} sx={listSx} keyField={'variantID'}>
                <ListItem sx={listItemSx}>
                    <VariantPicture setCurrentVariant={setCurrentVariant} currentVariant={currentVariant}/>
                </ListItem>
            </ArrayList>
        </Box>
    )
}


