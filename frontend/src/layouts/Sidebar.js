import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import Logo from "../components/Logo";
import SocialLinks from "../features/navigation/components/SocialLinks";
import Box from "@mui/material/Box";
import SidebarNav from "../features/navigation/components/SidebarNav";


const boxSx = {
    display: {xs: 'none', sm: 'block'},
    width: "320px",
    paddingY: "50px",

}

const logoSx = {
    width: "100%"
}



export default function Sidebar({isDrawerDisplayed, setIsDrawerDisplayed}) {

    const handleDrawerClose = () => {
        setIsDrawerDisplayed(false);
    };


    return (
        <nav>
            <Box sx={boxSx}>
                <Logo color={'black'} sx={logoSx}/>
                <Toolbar/>
                <SidebarNav/>
                <SocialLinks />
            </Box>
            {/*<Drawer*/}
            {/*    variant={'temporary'}*/}
            {/*    open={isDrawerDisplayed}*/}
            {/*    onClose={handleDrawerClose}*/}
            {/*    modelProps={{keepMounted: true}} >*/}
            {/*    <Logo color={'black'} sx={logoSx}/>*/}
            {/*    <Toolbar/>*/}
            {/*    <SidebarNav/>*/}
            {/*    <SocialLinks/>*/}
            {/*</Drawer>*/}
        </nav>
    );
}


