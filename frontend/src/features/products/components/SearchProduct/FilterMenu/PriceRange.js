import React, {useState} from "react"
import {Box, Slider, Typography} from "@mui/material";

function valuetext(value) {
    return `${value}°C`;
}

export default function PriceRange({price, setFilterField}) {

    const [minPrice] = useState(price[0])
    const [maxPrice] = useState(price[1])

    const handlePriceChange = (event) => {
        setFilterField({price: event.target.value})
    }

    return (
        <Box>
            <Slider value={price} onChange={handlePriceChange} getAriaValueText={valuetext}
                    getAriaLabel={() => 'Price range'} valueLabelDisplay={'auto'}
                    min={minPrice} max={maxPrice}/>
            <Typography>${price[0]} - ${price[1]}</Typography>
        </Box>
    )
}