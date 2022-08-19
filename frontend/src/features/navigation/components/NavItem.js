import React from "react"
import {Link} from "@mui/material"
import OrangeLine from "../../../components/OrangeLine";

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

const orangeLineSx = {
    position: "relative",
    right: "200px"

}

export default function NavItem({link, name, color, animated}) {

    const onClick = () => {
        console.log("transfer to:", link)
    }

    return (
        <React.Fragment>
            {animated && <OrangeLine sx={orangeLineSx}/>}
            <Link onClick={onClick} variant={'string'} sx={linkSx} underline={"none"} color={color ?? "black"}>
                {name}
            </Link>
        </React.Fragment>

    )
}