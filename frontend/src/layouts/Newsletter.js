import React from 'react';
import Box from '@mui/material/Box';
import SignupFom from "../features/newsletter/components/SignupFom";
import {Container, Grid, Typography} from "@mui/material";

const newsLetterSx = {
    padding: '100px ',
    backgroundColor: '#3c3c3c',
    borderRadius: 0,
    color: "white",

    "@media (max-width:768px)": {
        padding: "40px"
    }
}

const newsLetterHeaderSx = {
    fontSize: 37.
}

const discountTextSx = {
    color: "orange",
    fontSize: "40px"
}

const discountDescriptionSx = {
    color: "gray",
    fontWeight: 550,
}


export default function Newsletter() {
    return (
        <Box sx={newsLetterSx}>
            <Container>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography display={'inline'} sx={newsLetterHeaderSx}>Subscribe for a</Typography>
                        <Typography display={'inline'} sx={discountTextSx}> 25% Discount</Typography>

                        <Typography sx={discountDescriptionSx}>Nulla ac convallis lorem, eget euismod nisl. Donec in
                            libero
                            sit
                            amet mi vulputate
                            consectetur.
                            Donec auctor interdum purus, ac finibus massa bibendum nec.</Typography>
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <SignupFom/>
                    </Grid>
                </Grid>
            </Container>

        </Box>

    );
}
