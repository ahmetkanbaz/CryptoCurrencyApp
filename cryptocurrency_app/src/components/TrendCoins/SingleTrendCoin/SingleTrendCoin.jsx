import PropTypes from "prop-types";
const SingleTrendCoin = ({ coin }) => {
  const { item } = coin;
  const { small, symbol, market_cap_rank, name } = item;
  return (
    <div className="border-bottom py-3">
      <div className="d-flex justify-content-end mb-3">
        <span className="fst-italic text-lg-end text-center">
          Rank #{market_cap_rank}
        </span>
      </div>
      <div className="d-flex ps-lg-5 ps-1 align-items-center gap-3">
        <img src={small} alt="" className="img-fluid" width="30px" />
        <span className="fs-5 fw-bold">{name}</span>
        <span className="text-uppercase">{symbol}</span>
      </div>
    </div>
  );
};

SingleTrendCoin.propTypes = {
  coin: PropTypes.object,
};

export default SingleTrendCoin;
