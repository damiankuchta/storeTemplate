import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload

            //find if item is already in the array, if it is, swap it with new data, if not add it into array

            const index = state.items.findIndex(i => (i.variant.variantId === item.variant.variantId))
            if (index > -1) {
                state.items[index] = item
            } else {
                state.items.push(item)
            }

        },
        removeItem: (state, action) => {

            const index = state.items.findIndex(i => (i.variantId === action.payload.item.variantId))
            if (index > -1) {
                state.items.splice(index, 1)
            } else {
                state.error = {message: "item not found in the cart!"}
            }
        },

    }
})

export const {addItem, removeItem} = cartSlice.actions
export default cartSlice.reducer