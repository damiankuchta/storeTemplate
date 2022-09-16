import React from "react"
import SocialIcon from "../../../components/SocialIcon";
import socialMedia from "../../../data/socialMedia";
import ArrayList from "../../../components/ArrayList";
import ListItem from "../../../components/ListItem";


const socialLinksBoxSX = {
    display:"flex",
    justifyContent: "center",
    marginTop: "30px",
}

export default function SocialLinks() {

    return (
        <ArrayList array={socialMedia} sx={socialLinksBoxSX} disablePadding>
            <ListItem>
                <SocialIcon/>
            </ListItem>
        </ArrayList>
    )
}