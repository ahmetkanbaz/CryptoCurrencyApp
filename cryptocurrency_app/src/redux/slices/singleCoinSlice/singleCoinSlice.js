import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleCoin: [],
  loading: false,
  error: null,
};

const singleCoinSlice = createSlice({
  name: "singleCoin",
  initialState,
  reducers: {
    setLoadingSingleCoin: (state) => {
      state.loading = true;
    },
    setSingleCoin: (state, action) => {
      state.loading = false;
      state.singleCoin = action.payload;
    },
    setErrorSingleCoin: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.singleCoin = [];
    },
  },
});

export const { setLoadingSingleCoin, setSingleCoin, setErrorSingleCoin } =
  singleCoinSlice.actions;

export default singleCoinSlice.reducer;
