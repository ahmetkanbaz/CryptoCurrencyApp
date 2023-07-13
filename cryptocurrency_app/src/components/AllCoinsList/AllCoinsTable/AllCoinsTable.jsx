import {useSelector} from 'react-redux'
import AllCoinsTableItem from './AllCoinsTableItem';
const AllCoinsTable = () => {
  const allCoins = useSelector((state) => state.allCoins.allCoins)
  return (
    <div>
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
            allCoins.map((coin) => <AllCoinsTableItem key={coin.id} coin = {coin} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default AllCoinsTable;
