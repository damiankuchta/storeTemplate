import {Typography} from "@mui/material";

const linkSx = {
    transitionDuration: "0.4s",

    "&:hover": {
        transitionDuration: "0.4s",
        color: "orange",
    }
}

const selectedSx = {
    color: "orange"
}

export default function HighlightedText(props) {

    return <Typography {...props} sx={{...props.sx, ...linkSx, ...(props.isSelected && selectedSx)}}>{props.children}</Typography>

}