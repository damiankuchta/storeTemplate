import React from "react"
import ArrayList from "../../../../components/ArrayList";
import ListItem from "../../../../components/ListItem";
import {ShowcaseProduct} from "../../index";

export default function ProductColumn({productList, totalNumberInColumn, columnNumber}) {

    return (
        <ArrayList array={productList} disablePadding>
            <ListItem disablePadding>
                <ShowcaseProduct totalNumberInColumn={totalNumberInColumn} columnNumber={columnNumber}/>
            </ListItem>
        </ArrayList>

    )
}