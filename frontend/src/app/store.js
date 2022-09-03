import { configureStore } from '@reduxjs/toolkit'
import {cartSlice} from "../features/cart/index"

export default configureStore({
  reducer: {
    cart: cartSlice
  }
})