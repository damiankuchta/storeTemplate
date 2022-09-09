import React from "react"
import CheckBoxFilterMenuItem from "./CheckBoxFilterMenuItem";
import mapDictionary from "../../../../utils/mapDictionary";

export default function Brands({brands, setFilters}) {

    return mapDictionary(brands, (key, value) => {
        return <CheckBoxFilterMenuItem setFilters={setFilters} name={key} checked={value}/>
    })


}