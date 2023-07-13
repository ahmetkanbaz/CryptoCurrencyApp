import { useSelector } from "react-redux";
import SingleTrendCoin from "../SingleTrendCoin/SingleTrendCoin";
const AllTrendCoins = () => {
  const trendCoins = useSelector((state) => state.trendCoins.trendCoins);
  return (
    <div>
      <h3>Trend Coins</h3>
      {trendCoins.length != 0 &&
        trendCoins.coins.map((coin, i) => (
          <SingleTrendCoin key={i} coin={coin} />
        ))}
    </div>
  );
};

export default AllTrendCoins;
