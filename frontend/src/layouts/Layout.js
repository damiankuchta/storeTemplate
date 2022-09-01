import React, {useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

import Main from './Main/Main';

import Box from "@mui/material/Box";

const mainBoxSx = {
    display: "flex",
    flexDirection: "row",
}

export default function Layout({children}) {
    const [isDrawerDisplayed, setIsDrawerDisplayed] = useState(false);

    return (
        <React.Fragment>
            <Navbar setIsDrawerDisplayed={setIsDrawerDisplayed}/>

                <Box sx={mainBoxSx}>
                    <Sidebar
                        isDrawerDisplayed={isDrawerDisplayed}
                        setIsDrawerDisplayed={setIsDrawerDisplayed}
                    />
                    <Main/>
                </Box>

                <Box>
                    <Newsletter/>
                    <Footer/>
                </Box>

        </React.Fragment>
    );
}
