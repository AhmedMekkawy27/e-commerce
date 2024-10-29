import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from '../features/cart/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import  wishlistSlice  from '../features/wishlist/wishlistSlice'

const persistCartConfig = {
  key: 'cart',
  storage,
}
const persistWishlistConfig = {
  key: 'wishlist',
  storage,
}

const persistedCart = persistReducer(persistCartConfig, cartSlice)
const persistedWishlist = persistReducer(persistWishlistConfig, wishlistSlice)

export const store = configureStore({
  reducer: {
    cart: persistedCart,
    wishlist: persistedWishlist
  }
})

export const persistor = persistStore(store)

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']