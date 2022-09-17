import React from "react"
import ArrayList from "../../../../components/ArrayList";
import ListItem from "../../../../components/ListItem";
import {ShowcaseProduct} from "../../index";

export default function ProductColumn({productList, totalNumberInColumn, biggerPictureEvery}) {

    return (
        <ArrayList array={productList} keyField={'productID'} disablePadding>
            <ListItem disablePadding>
                <ShowcaseProduct totalNumberInColumn={totalNumberInColumn} biggerPictureEvery={biggerPictureEvery}/>
            </ListItem>
        </ArrayList>

    )
}