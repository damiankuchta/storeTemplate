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

export default function HighlightedText({children, sx, selected, onClick}) {

    return <Typography onClick={onClick} sx={{...sx, ...linkSx, ...(selected && selectedSx)}}>{children}</Typography>

}