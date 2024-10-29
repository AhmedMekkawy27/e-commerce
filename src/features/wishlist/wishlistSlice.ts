import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { wishlistProduct } from '../../interfaces'
import { addItemToWishlist } from '../../utils'



export interface wishlistState {
wishlistProducts: wishlistProduct[]
  }

  const initialState: wishlistState = {
    wishlistProducts: []
  }
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<wishlistProduct>) => {
      state.wishlistProducts = addItemToWishlist(action.payload, state.wishlistProducts)
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.wishlistProducts = state.wishlistProducts.filter(item => item.id !== action.payload)
    },
  }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export const selectWishlist = (state: RootState) => state.wishlist

export default wishlistSlice.reducer