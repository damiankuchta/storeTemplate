import {createSlice} from "@reduxjs/toolkit"
import {randomVariant} from "../../data/productData";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [{quantity: 2, product: new randomVariant("title1").toJSON()}, {quantity: 4, product: new randomVariant("title2").toJSON()}],
        status: "idle",
        error: null,
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload

            //find if item is already in the array, if it is, swap it with new data, if not add it into array
            const index = state.items.findIndex(i => (i.product.variantID === item.product.variantID))


            if (index > -1) {
                state.items[index] = item
            } else {
                state.items.push(item)
            }

        },
        removeItem: (state, action) => {

            const index = state.items.findIndex(i => (i.variantID === action.payload.variantID))
            if (index > -1) {
                state.items.splice(index, 1)
            } else {
                state.error = {message: "item not found in the cart!"}
            }
        },
    }
})
export const itemsSelector = state => state.cart.items
export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer