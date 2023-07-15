import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  allCoins: [],
  loading: false,
  error: null
}

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setLoadingAllCoins: (state) => {
      state.loading = true;
    },
    setAllCoins: (state, action) => {
      state.loading = false;
      state.allCoins = action.payload;
    },
    setErrorAllCoins: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.allCoins = []
    }
  }
});

export const {setLoadingAllCoins, setAllCoins, setErrorAllCoins} = coinsSlice.actions;

export default coinsSlice.reducer;