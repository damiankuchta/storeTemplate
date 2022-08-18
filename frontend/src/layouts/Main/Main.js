import React from "react"
import {Box, Grid} from "@mui/material";

import image1
    from "../../assets/furniture/adam-nathanial-furnam-babs-commonwealth-fierce-festival_dezeen_2364_col_0-1024x1024.jpg"
import image2
    from "../../assets/furniture/amazones-in-white-heaven-contents-sq_-SquareE280931330x1330px-black-white-1024x1024.jpg"
import image3
    from "../../assets/furniture/carl-hansen-and-sons-brad-ascalon-design-preludia-furniture_dezeen_2364_col_12-1024x1024.jpg"
import image4 from "../../assets/furniture/clancy-moore-architects-writing-room_sq_dezeen_2364_col_0-1024x1024.jpg"
import image5 from "../../assets/furniture/dog-goes-here-rocky-brooks-design_dezeen_2364_sq-1-1024x1024.jpg"
import image6 from "../../assets/furniture/ecal-muji-compact-life-milan-design-week-sq-1-1024x1024.jpg"
import image7
    from "../../assets/furniture/ecture-australia-curious-practice_dezeen_2364_col_13-1704x1483-sq3-1024x1024.jpg"
import image8 from "../../assets/furniture/folk-dining-furniture-collection-allermuir_dezeen_sq-1024x1024.jpg"
import image9 from "../../assets/furniture/hoopsy-paper-pregnancy-test-design_dezeen_2364_sq-1024x1024.jpg"
import ShowcaseProduct from "../../components/ShowcaseProduct";

const mainBoxSx = {
    width: "100%",
    height: 1300,
}

const mediumBox = {
    height: "30%",
}

const bigBox = {
    height: "40%",
}


export default function Main({children}) {

    return (
        <Box sx={mainBoxSx}>
            <Grid container flexDirection={'row'} sx={{height: "100%"}}>
                <Grid item flexDirection={'column'} xs={4}>
                    <Grid item sx={mediumBox}><ShowcaseProduct src={image1} productName={'Some Toy'} fromPrice={200}/></Grid>
                    <Grid item sx={mediumBox}><ShowcaseProduct src={image2}/></Grid>
                    <Grid item sx={bigBox}><ShowcaseProduct src={image3}/></Grid>
                </Grid>
                <Grid item flexDirection={'column'} xs={4}>
                    <Grid item sx={bigBox}><ShowcaseProduct src={image4}/></Grid>
                    <Grid item sx={mediumBox}><ShowcaseProduct src={image5}/></Grid>
                    <Grid item sx={mediumBox}><ShowcaseProduct src={image6}/></Grid>
                </Grid>
                <Grid item flexDirection={'column'} xs={4}>
                    <Grid item sx={mediumBox}><ShowcaseProduct src={image7}/></Grid>
                    <Grid item sx={bigBox}><ShowcaseProduct src={image8}/></Grid>
                    <Grid item sx={mediumBox}><ShowcaseProduct src={image9}/></Grid>
                </Grid>
            </Grid>
        </Box>
    )
}