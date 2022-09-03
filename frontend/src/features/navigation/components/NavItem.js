import React from "react"
import {Link} from "@mui/material"
import {useNavigate} from "react-router-dom";

const linkSx = {
    textTransform: "uppercase",
    cursor: "pointer",
    transitionDuration: "0.4s",
    fontWeight: 500,

    "&:hover": {
        transitionDuration: "0.4s",
        color: "orange",
    }
}


export default function NavItem({name, color}) {

    return (
        <Link variant={'string'} sx={linkSx}
              underline={"none"} color={color ?? "black"}>
            {name}
        </Link>
    )
}