import React from "react"
import SocialIcon from "../../../components/SocialIcon";
import socialMedia from "../../../data/socialMedia";
import ArrayList from "../../../components/ArrayList";
import ListItem from "../../../components/ListItem";
import {Container} from "@mui/material";


const socialLinksBoxSX = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",

    "& > *": {
        marginX: "8px"
    }

}

const listItemSx = {
    width: "auto",
}

export default function SocialLinks() {

    return (
        <Container>
            <ArrayList array={socialMedia} sx={socialLinksBoxSX} disablePadding>
                <ListItem sx={listItemSx} disablePadding>
                    <SocialIcon/>
                </ListItem>
            </ArrayList>
        </Container>
    )
}