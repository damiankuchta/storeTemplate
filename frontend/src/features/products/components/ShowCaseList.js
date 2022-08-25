import React from "react"
import {Box, Container, Grid} from "@mui/material";
import ShowcaseProduct from "./ShowcaseProduct";

import image1
    from "../../../assets/furniture/adam-nathanial-furnam-babs-commonwealth-fierce-festival_dezeen_2364_col_0-1024x1024.jpg"
import image2
    from "../../../assets/furniture/amazones-in-white-heaven-contents-sq_-SquareE280931330x1330px-black-white-1024x1024.jpg"
import image3
    from "../../../assets/furniture/carl-hansen-and-sons-brad-ascalon-design-preludia-furniture_dezeen_2364_col_12-1024x1024.jpg"
import image4 from "../../../assets/furniture/clancy-moore-architects-writing-room_sq_dezeen_2364_col_0-1024x1024.jpg"
import image5 from "../../../assets/furniture/dog-goes-here-rocky-brooks-design_dezeen_2364_sq-1-1024x1024.jpg"
import image6 from "../../../assets/furniture/ecal-muji-compact-life-milan-design-week-sq-1-1024x1024.jpg"
import image7
    from "../../../assets/furniture/ecture-australia-curious-practice_dezeen_2364_col_13-1704x1483-sq3-1024x1024.jpg"
import image9 from "../../../assets/furniture/hoopsy-paper-pregnancy-test-design_dezeen_2364_sq-1024x1024.jpg"


const mainBoxSx = {
    width: "100%",
    gap:"0"
}


export default function ShowCaseList({data}) {

    return (
        <Box sx={mainBoxSx}>
            <Grid container>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
                <Grid item sx={12} md={6} lg={4}><ShowcaseProduct src={image2}/></Grid>
            </Grid>
                {/*< ShowcaseProduct*/}
                {/*    src={image1}*/}
                {/*    productName={'Some Toy'}*/}
                {/*    fromPrice={200}*/}
                {/*/>*/}
                {/*<ShowcaseProduct src={image2}/>*/}
                {/*<ShowcaseProduct src={image3}/>*/}
                {/*<ShowcaseProduct src={image4}/>*/}
                {/*<ShowcaseProduct src={image5}/>*/}
                {/*<ShowcaseProduct src={image6}/>*/}
                {/*<ShowcaseProduct src={image7}/>*/}
                {/*<ShowcaseProduct src={image9}/>*/}
        </Box>
    )
}