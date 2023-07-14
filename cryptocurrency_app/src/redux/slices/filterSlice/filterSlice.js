import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  sortOption: 'default',
  filterCoins: []
}

const filterSlice = createSlice({
  name: 'filterCoins',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload
    },
    setFilterCoins: (state, action) => {
      state.filterCoins = action.payload
    }
  }
})

export const {setSearchQuery, setSortOption, setFilterCoins} = filterSlice.actions;

export default filterSlice.reducer;