import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from '../slices/allCoinsSlice/coinsSlice'
import themeReducer from '../slices/themeSlice/themeSlice'
import singleCoinReducer from '../slices/singleCoinSlice/singleCoinSlice'

const store = configureStore({
  reducer: {
    allCoins: coinsReducer,
    theme: themeReducer,
    singleCoin: singleCoinReducer
  }
})

export default store