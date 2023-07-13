import PropTypes from "prop-types";
const SingleNFT = ({ nft }) => {
  const { name, symbol, thumb } = nft;
  return (
    <div className="border-bottom py-3">
      <div className="d-flex justify-content-end">
        <span className="text-uppercase fst-italic">{symbol}</span>
      </div>
      <div className="d-flex align-items-center gap-3 ps-lg-5 ps-1">
        <img src={thumb} alt="" className="img-fluid" width="30px" />
        <h5>{name}</h5>
      </div>
    </div>
  );
};

SingleNFT.propTypes = {
  nft: PropTypes.object,
};

export default SingleNFT;
