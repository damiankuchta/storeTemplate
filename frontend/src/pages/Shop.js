import React, {useState} from "react"

export default function Shop() {

    const [filters, setFilters] = useState({
        brands: [],
        category: "",
        colors:  [],
        price_range: [],
    })

    const [displayType, setDisplayType] = useState("tiles")
    const [sortBy, setSortBy] = useState("Date")
    const [view, setView] = useState(12)


    return (
        <React.Fragment>
        {/* dislay amount of pages*/}
        {/* filters menu */}
        {/* display/sort menu */}
        {/* product component*/}
        {/* pages */}
        </React.Fragment>
    )
}