import axios from 'axios'
import {setLoadingAllCoins, setAllCoins, setErrorAllCoins} from '../redux/slices/allCoinsSlice/coinsSlice'
import { setLoadingSingleCoin, setSingleCoin, setErrorSingleCoin } from '../redux/slices/singleCoinSlice/singleCoinSlice'

const apiUrl = 'http://localhost:3000'

export const getAllCoins = () => async (dispatch) => {
  dispatch(setLoadingAllCoins())
  try {
    const response = await axios.get(`${apiUrl}/allCoins`)
    dispatch(setAllCoins(response.data))
  }
  catch (error) {
    dispatch(setErrorAllCoins(error.message))
  }
}

export const getSingleCoin = (id) => async (dispatch) => {
  dispatch(setLoadingSingleCoin())
  try {
    const response = await axios.get(`${apiUrl}/allCoins/${id}`)
    dispatch(setSingleCoin(response.data))
  }
  catch (error) {
    dispatch(setErrorSingleCoin(error.message))
  }
}