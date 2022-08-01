import React from 'react';
import Drawer from '@mui/material/Drawer';

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavList from "../../features/navigation/components/NavList";
import Logo from "../../components/Logo";


const boxSx = {display: {xs: 'none', sm: 'block'}, width: 320}

const sideBarContent = (
    <React.Fragment>
        <Logo color={'black'}/>
        <Toolbar/>
        <NavList/>
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


