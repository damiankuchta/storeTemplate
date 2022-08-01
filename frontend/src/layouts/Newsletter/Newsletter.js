import React from 'react';
import Box from '@mui/material/Box';
import SignupFom from "../../features/newsletter/components/SignupFom";
import {Container, Grid, Typography} from "@mui/material";

const newsLetterSx = {
    padding: '150px',
    backgroundColor: '#3c3c3c',
    borderRadius: 0,
    color: "white",
}

const newsLetterHeaderSx = {
    fontSize: 37.
}

const discountTextSx = {
    color: "orange",
}

const discountDescriptionSx = {
    color: "gray",
    fontWeight: 550,
}


export default function Newsletter() {
    return (
        <Box sx={newsLetterSx}>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={7}>
                        <Typography sx={newsLetterHeaderSx}>Subscribe for a
                            <Box display={'inline'} sx={discountTextSx}> 25% Discount</Box>
                        </Typography>
                        <Typography sx={discountDescriptionSx}>Nulla ac convallis lorem, eget euismod nisl. Donec in
                            libero
                            sit
                            amet mi vulputate
                            consectetur.
                            Donec auctor interdum purus, ac finibus massa bibendum nec.</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <SignupFom/>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
}
