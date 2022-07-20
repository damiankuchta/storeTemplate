import React from "react"
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

export default function Layout({children}) {

    return (
        <React.Fragment>
            <Main>{children}</Main>
            <Sidebar/>
            <Footer/>
        </React.Fragment>
    )
}

