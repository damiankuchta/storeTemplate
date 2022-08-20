import React from "react"
import {Link} from "@mui/material"

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


export default function NavItem({link, name, color}) {

    const onClick = () => {
        console.log("transfer to:", link)
    }

    return (
        <Link onClick={onClick} variant={'string'} sx={linkSx}
              underline={"none"} color={color ?? "black"}>
            {name}
        </Link>
    )
}