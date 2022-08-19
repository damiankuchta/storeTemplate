import React from 'react';
import Box from '@mui/material/Box';
import Logo from "../../components/Logo";
import {Container, Grid, Typography} from "@mui/material";
import {NavList} from "../../features/navigation";


const footerSx = {
    padding: '80px 0',
    width: '100%',
    backgroundColor: '#252525',
}

const copyRightsSx = {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: "12px",
}

const navListSx = {
        display: "flex",
        flexDirection: "row",
}

export default function Footer() {
    return (
        <Box as="footer" sx={footerSx}>
            <Container>
                <Grid spacing={30} container alignItems="center">
                    <Grid xs={5} item>
                        <Logo/>
                        <Typography variatn={'string'} sx={copyRightsSx}>
                            Copy of <a href="https://preview.colorlib.com/theme/amado/">Theme</a> | Only for learning
                            purposes | This template is made with by Colorlib
                        </Typography>
                    </Grid>
                    <Grid item>
                        <NavList color={'white'} sx={navListSx} isHorizontal={true} spacing={40}/>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
