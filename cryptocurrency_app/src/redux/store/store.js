import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from '../slices/allCoinsSlice/coinsSlice'

const store = configureStore({
  reducer: {
    allCoins: coinsReducer,
  }
})

export default store