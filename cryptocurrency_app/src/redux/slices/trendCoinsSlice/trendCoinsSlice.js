import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendCoins: [],
  loading: false,
  error: null
}

const trendCoinsSlice = createSlice({
  name: 'trendCoins',
  initialState,
  reducers: {
    setLoadingTrendCoins: (state) => {
      state.loading = true
    },
    setTrendCoins: (state, action) => {
      state.loading = false;
      state.trendCoins = action.payload;
    },
    setErrorTrendCoins: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.trendCoins = [];
    }
  }
})

export const {setLoadingTrendCoins, setTrendCoins, setErrorTrendCoins} = trendCoinsSlice.actions;

export default trendCoinsSlice.reducer;