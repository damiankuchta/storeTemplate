import React, {useState} from "react"
import {Slider} from "@mui/material";

function valuetext(value) {
    return `${value}°C`;
}

export default function PriceRange({price,setFilterField}) {

    const [minPrice] = useState(price[0])
    const [maxPrice] = useState(price[1])


    const handlePriceChange = (event, value) => {
        setFilterField({price: value})
    }

    return (
        <Slider value={price} onChange={handlePriceChange} getAriaValueText={valuetext}
                getAriaLabel={() => 'Price range'} valueLabelDisplay={'auto'}
                min={minPrice} max={maxPrice}/>
    )
}