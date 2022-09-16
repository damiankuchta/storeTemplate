import {Typography} from "@mui/material";

const linkSx = {
    transitionDuration: "0.4s",

    "&:hover": {
        transitionDuration: "0.4s",
        color: "orange",
    },

}


export default function HighlightedText(props) {

    return <Typography {...props} sx={{...linkSx, ...props.sx}}>
        {props.children}
    </Typography>

}