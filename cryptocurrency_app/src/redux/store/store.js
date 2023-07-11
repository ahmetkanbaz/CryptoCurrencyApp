import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from '../slices/allCoinsSlice/coinsSlice'
import themeReducer from '../slices/themeSlice/themeSlice'

const store = configureStore({
  reducer: {
    allCoins: coinsReducer,
    theme: themeReducer
  }
})

export default store