import DetailCoinDatas from "./DetailCoinDatas/DetailCoinDatas";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import {getSingleCoin} from '../../utils/request'

const DetailCoin = () => {
  const dispatch = useDispatch()
  const singleCoin = useSelector((state) => state.singleCoin.singleCoin)
  const {id} = useParams()
  useEffect(() => {
    dispatch(getSingleCoin(id))
  }, [])


  const {market_cap_rank, image, name, symbol } = singleCoin
  return (
    <div className="py-5">
      <div className="container py-5">
        <span>Rank #{market_cap_rank}</span>
        <div className="d-flex align-items-center gap-2 mt-3">
          <img
            src={image}
            alt=""
            className="img-fluid"
            width='40px'
          />
          <span className="fw-bold">{name}</span>
          <span className="text-uppercase">{symbol}</span>
        </div>
        <DetailCoinDatas singleCoin = {singleCoin}/>
      </div>
    </div>
  );
};

export default DetailCoin;
