import DetailCoinDatas from "./DetailCoinDatas/DetailCoinDatas";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleCoin, getTrendCoins } from "../../utils/request";
import { DetailCoinWrapper } from "./DetailCoinStyle";
import AllTrendCoins from "../TrendCoins/AllTrendCoins/AllTrendCoins";
import AllNFTs from "../TrendNFTs/AllNFTs/AllNFTs";

const DetailCoin = () => {
  const dispatch = useDispatch();
  const singleCoin = useSelector((state) => state.singleCoin.singleCoin);
  const theme = useSelector((state) => state.theme.theme);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleCoin(id));
    dispatch(getTrendCoins())
  }, []);

  const { market_cap_rank, image, name, symbol } = singleCoin;
  return (
    <DetailCoinWrapper className="py-5" theme={theme}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 col-12 mb-3 mb-lg-0">
            <span className="rounded-5 py-1 px-4 rank">
              Rank #{market_cap_rank}
            </span>
            <div className="d-flex align-items-center gap-2 mt-4">
              <img src={image} alt="" className="img-fluid" width="50px" />
              <span className="fw-bold fs-4">{name}</span>
              <span className="text-uppercase fs-5">{symbol}</span>
            </div>
            <DetailCoinDatas singleCoin={singleCoin} />
          </div>
          <div className="col-md-4 col-12 my-4 my-lg-0">
            <AllTrendCoins />
          </div>
          <div className="col-md-4 col-12">
            <AllNFTs />
          </div>
        </div>
      </div>
    </DetailCoinWrapper>
  );
};

export default DetailCoin;
