import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from '../slices/allCoinsSlice/coinsSlice'
import themeReducer from '../slices/themeSlice/themeSlice'
import singleCoinReducer from '../slices/singleCoinSlice/singleCoinSlice'
import trendCoinsReducer from '../slices/trendCoinsSlice/trendCoinsSlice'
import filterCoinsReducer from '../slices/filterSlice/filterSlice'

const store = configureStore({
  reducer: {
    allCoins: coinsReducer,
    theme: themeReducer,
    singleCoin: singleCoinReducer,
    trendCoins: trendCoinsReducer,
    filterCoins: filterCoinsReducer
  }
})

export default store