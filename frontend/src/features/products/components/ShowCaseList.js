import React from "react"
import {Box, Grid} from "@mui/material";
import ShowcaseProduct from "./ShowcaseProduct";

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images

}

const images = importAll(require.context('../../../assets/furniture', false, /\.(png|jpe?g|svg)$/));

const randomPicture = () => {
    return images[Object.keys(images)[Math.floor(Math.random() * Object.keys(images).length)]]
}

const mainBoxSx = {
    width: "100%",
}

export default function ShowCaseList({data}) {

    data = [{
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }, {
        image: randomPicture(),
        name: "SomeText",
        fromValue: 300,
    }]


    return (
        <Box sx={mainBoxSx} itemID={'product-showcase-list'}>

            {/*3 and 1 column gird*/}
            <Grid display={{"xs": "flex", "md": "none", "lg": "flex"}} container>
                <Grid xs={12} md={6} lg={4}>
                    {data.slice(data.length / 3 * 2).map(({image}, index) => {
                        return <ShowcaseProduct src={image} isBigger={(index + 1) % 3 === 0}/>
                    })}
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    {data.slice(data.length / 3, (data.length / 3) * 2).map(({image}, index) => {
                        return <ShowcaseProduct src={image} isBigger={(index + 2) % 3 === 0}/>
                    })}
                </Grid>

                <Grid xs={12} md={6} lg={4}>
                    {data.slice(0, data.length / 3).map(({image}, index) => {
                        return <ShowcaseProduct src={image} isBigger={(index + 3) % 3 === 0}/>
                    })}
                </Grid>
            </Grid>

            {/*2 column grid*/}
            <Grid display={{"xs": "none", "md": "flex", "lg": "none"}} container>
                <Grid xs={12} md={6}>
                    {data.slice(0, data.length / 2).map(({image}, index) => {
                        return <ShowcaseProduct src={image} isBigger={(index + 1) % 3 === 0}/>
                    })}
                </Grid>

                <Grid xs={12} md={6}>
                    {data.slice(data.length / 2).map(({image}, index) => {
                        return <ShowcaseProduct src={image} isBigger={(index + 2) % 3 === 0}/>
                    })}
                </Grid>
            </Grid>

        </Box>
    )
}