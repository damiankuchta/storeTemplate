import {Typography} from "@mui/material";

const linkSx = {
    transitionDuration: "0.4s",

    "&:hover": {
        transitionDuration: "0.4s",
        color: "orange",
    }
}

export default function HighlightedText({children, sx}) {
    return <Typography sx={{...sx, ...linkSx}}>
        {children}
    </Typography>
}