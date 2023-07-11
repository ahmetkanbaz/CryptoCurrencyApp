import {useSelector} from 'react-redux'
import AllCoinsTableItem from './AllCoinsTableItem';
const AllCoinsTable = () => {
  const allCoins = useSelector((state) => state.allCoins.allCoins)
  console.log(allCoins)
  return (
    <div>
      <table className="table table-striped tableAllCoins">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Fiyat</th>
            <th>1s</th>
            <th>24s</th>
            <th>7g</th>
            <th>24 Saatlik Hacim</th>
            <th>Pys Değ</th>
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
