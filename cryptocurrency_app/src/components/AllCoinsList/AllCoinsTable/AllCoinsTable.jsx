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
            <th>Fiyat</th>
            <th>En Yüksek 24s</th>
            <th>En Düşük 24s</th>
            <th>Değişim (%) 24s</th>
            <th>Dolaşan Arz</th>
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
