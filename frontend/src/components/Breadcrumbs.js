import React from "react"
import {Breadcrumbs, Link} from "@mui/material";

export default function Breadcrumbs({title}) {

    return (
        <Breadcrumbs>
            <Link underline={'hover'}>Home</Link>
            <Link underline={'hover'}>Furniture</Link>
            <Link underline={'hover'}>Chairs</Link>
            <Link underline={'hover'}>{title}</Link>
        </Breadcrumbs>
    )
}