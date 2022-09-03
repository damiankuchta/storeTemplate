import React from 'react';
import Box from '@mui/material/Box';
import Logo from "../components/Logo";
import {Container, Grid, Typography} from "@mui/material";
import {NavList} from "../features/navigation";


const footerSx = {
    padding: '80px 0',
    width: '100%',
    backgroundColor: '#252525',
}

const copyRightsSx = {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: "12px",
}

export default function Footer() {
    return (
        <Box as="footer" sx={footerSx}>
            <Container>
                <Grid container alignItems="center">
                    <Grid sx={12} md={6} item>
                        <Logo/>
                        <Typography variant={'string'} sx={copyRightsSx}>
                            Copy of <a href="frontend/src/layouts/Footer">Theme</a> | Only for learning
                            purposes | This template is made with by Colorlib
                        </Typography>
                    </Grid>
                    <Grid item md={6}>
                        <NavList/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
