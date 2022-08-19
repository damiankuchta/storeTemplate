import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import NavList from "../../features/navigation/components/NavList";
import Logo from "../../components/Logo";
import SocialLinks from "../../features/navigation/components/SocialLinks";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";


const boxSx = {
    display: {xs: 'none', sm: 'block'},
    width: "320px",
    paddingY: "50px",

}

const logoSx ={
    width: "100%"
}

const navListSx = {
    paddingLeft: "90px"
}

const sideBarContent = (
    <React.Fragment>
        <Logo color={'black'} sx={logoSx}/>
        <Toolbar/>
        <NavList sx={navListSx} spacing={20} animated/>
        <SocialLinks/>
    </React.Fragment>
)

export default function Sidebar({isDrawerDisplayed, setIsDrawerDisplayed}) {

    const handleDrawerClose = () => {
        setIsDrawerDisplayed(false);
    };


    return (
        <aside>
            <Box sx={boxSx}>
                {sideBarContent}
            </Box>
            <Drawer
                variant={'temporary'}>
                open={isDrawerDisplayed}
                onClose={handleDrawerClose}
                modelProps={{keepMounted: true}}>
                {sideBarContent}
            </Drawer>
        </aside>
    );
}


