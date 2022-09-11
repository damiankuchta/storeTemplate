import React from "react"
import SocialIcon from "../../../components/SocialIcon";
import socialMedia from "../../../data/socialMedia";
import ArrayList from "../../../components/ArrayList";

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
        <ArrayList array={socialMedia} itemComponent={<SocialIcon/>} listProps={{sx: socialLinksBoxSX}}/>
    )
}