import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { cartProduct } from '../../interfaces'
import { addItemToShoppingCart, modifyItemQuantity } from '../../utils'



export interface cartState {
    cartProducts: cartProduct[]
  }

  const initialState: cartState = {
    cartProducts: []
  }
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartProduct>) => {
      state.cartProducts = addItemToShoppingCart(action.payload, state.cartProducts)
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(item => item.id !== action.payload)
    },
    modifyQuantity: (state, action: PayloadAction<{value: number; item: cartProduct}>) => {
      state.cartProducts = modifyItemQuantity(action.payload, state.cartProducts)
    },
  }
})

export const { addToCart, removeFromCart, modifyQuantity } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer