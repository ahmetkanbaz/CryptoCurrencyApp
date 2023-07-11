import axios from 'axios'
import {setLoadingAllCoins, setAllCoins, setErrorAllCoins} from '../redux/slices/allCoinsSlice/coinsSlice'

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