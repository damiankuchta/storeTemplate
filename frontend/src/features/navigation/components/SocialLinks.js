import React from "react"
import {Box, Container} from "@mui/material";
import SocialIcon from "../../../components/SocialIcon";

const socialLinksBoxSX = {
    display:"flex",
    justifyContent: "center",
    marginTop: "30px",
    "& a": {
        marginX: "4px"
    }
}

export default function SocialLinks() {

    return (
        <Box sx={socialLinksBoxSX}>
            <SocialIcon url={'https://pinterest.co.uk/'}/>
            <SocialIcon url={'https://instagram.com/'}/>
            <SocialIcon url={'https://facebook.com'}/>
            <SocialIcon url={'https://twitter.com'}/>
        </Box>
    )
}