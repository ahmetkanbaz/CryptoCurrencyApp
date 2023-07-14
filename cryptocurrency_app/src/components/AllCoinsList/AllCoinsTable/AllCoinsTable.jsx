import {useDispatch, useSelector} from 'react-redux'
import AllCoinsTableItem from './AllCoinsTableItem';
import { useEffect } from 'react';
import {setFilterCoins} from '../../../redux/slices/filterSlice/filterSlice'
const AllCoinsTable = () => {
  const dispatch = useDispatch()
  const allCoins = useSelector((state) => state.allCoins.allCoins)
  const searchQuery = useSelector((state) => state.filterCoins.searchQuery)
  const filterCoins = useSelector((state) => state.filterCoins.filterCoins)

  useEffect(() => {
    let tempFilteredCoins = [...allCoins];
    if(searchQuery) {
      tempFilteredCoins = tempFilteredCoins.filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    dispatch(setFilterCoins(tempFilteredCoins))
  }, [allCoins, searchQuery])
  return (
    <div className=' overflow-x-auto'>
      <table className="w-100 tableAllCoins">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Highest 24s</th>
            <th>Lowest 24s</th>
            <th>Change (%) 24s</th>
            <th>Circulating Supply</th>
            <th>Market Value</th>
          </tr>
        </thead>
        <tbody>
          {
            filterCoins.map((coin) => <AllCoinsTableItem key={coin.id} coin = {coin} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllCoinsTable;
