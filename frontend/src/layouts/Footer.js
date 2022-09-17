import React from 'react';
import Box from '@mui/material/Box';
import Logo from "../components/Logo";
import {Container, Grid, Typography} from "@mui/material";
import DictList from "../components/DictList";
import menu from "../data/menu";
import FooterNavItem from "../features/navigation/components/FooterNavItem";
import ListItem from "../components/ListItem";


const footerSx = {
    padding: '80px 85px',
    width: '100%',
    backgroundColor: '#252525',
    boxSizing: "border-box"
}

const copyRightsSx = {
    color: "rgba(255, 255, 255, 0.4)",
    fontSize: "12px",
}

const footerListSx = {
    display: "flex",
    flexDirection: "row",
    paddingX: "40px",
    width: "300px"
}

export default function Footer() {
    return (
        <Box as="footer" sx={footerSx}>
            <Container>
                <Grid container alignItems="center">
                    <Grid xs={12} md={6} item>
                        <Logo/>
                        <Typography variant={'string'} sx={copyRightsSx}>
                            Copy of <a href="frontend/src/layouts/Footer">Theme</a> | Only for learning
                            purposes | This template is made with by Colorlib
                        </Typography>
                    </Grid>
                    <Grid md={6} item>
                        <nav>
                            <DictList dict={menu} sx={footerListSx}>
                                <ListItem>
                                    <FooterNavItem/>
                                </ListItem>
                            </DictList>
                        </nav>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
