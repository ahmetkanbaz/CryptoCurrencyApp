import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  searchQuery: '',
  filterOptions: [],
  filterCoins: []
}

const filterSlice = createSlice({
  name: 'filterCoins',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setFilterOptions: (state, action) => {
      state.filterOptions = action.payload
    },
    setFilterCoins: (state, action) => {
      state.filterCoins = action.payload
    }
  }
})

export const {setSearchQuery, setFilterOptions, setFilterCoins} = filterSlice.actions;

export default filterSlice.reducer;