/* eslint-disable react/prop-types */

import DetailCoinSingleData from "../DetailCoinSingleData/DetailCoinSingleData";

const DetailCoinDatas = ({singleCoin}) => {
  const {current_price, high_24h, low_24h} = singleCoin
  const datas = [
    {title: 'Piyasa Değeri', value: current_price},
    {title: 'En Yüksek 24s', value: high_24h},
    {title: 'En Düşük 24s', value: low_24h}
  ]
  return (
    <div className="mt-3">
      <div className="row">
        {datas.map((data, i) => <DetailCoinSingleData key={i} data={data} />)}
      </div>
    </div>
  );
};

export default DetailCoinDatas;
