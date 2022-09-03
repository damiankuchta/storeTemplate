import React from "react"
import Product from "../pages/Product"
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import {
    Route,
    Routes

} from "react-router-dom";



export default function Main() {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/product/:id'} element={<Product/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
        </Routes>

    )
}