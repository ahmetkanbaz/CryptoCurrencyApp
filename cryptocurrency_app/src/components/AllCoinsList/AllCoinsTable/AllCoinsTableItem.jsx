import PropTypes from "prop-types";
import { moneyFormat } from "../../../helpers/moneyFormat";
import { useNavigate } from "react-router-dom";
const AllCoinsTableItem = ({ coin }) => {
  const navigate = useNavigate()
  const {
    id,
    image,
    name,
    symbol,
    current_price,
    market_cap_rank,
    market_cap,
    high_24h,
    low_24h,
    price_change_percentage_24h,
    circulating_supply,
  } = coin;

  let percentage;
  if (price_change_percentage_24h == 0) {
    percentage = "text-black";
  } else if (price_change_percentage_24h < 0) {
    percentage = "text-danger";
  } else {
    percentage = "text-success";
  }
  return (
    <tr onClick={() => navigate(`/detailcoin/${id}`)}>
      <td>{market_cap_rank}</td>
      <td className="d-flex align-items-center gap-2">
        <img src={image} alt={id} className="img-fluid" width="20px" />
        <span className="fw-bold">{name}</span>
        <span className="text-uppercase">{symbol}</span>
      </td>
      <td>{moneyFormat(current_price)}</td>
      <td>{moneyFormat(high_24h)}</td>
      <td>{moneyFormat(low_24h)}</td>
      <td className={`${percentage}`}>{price_change_percentage_24h}</td>
      <td>{moneyFormat(circulating_supply)}</td>
      <td>{moneyFormat(market_cap)}</td>
    </tr>
  );
};

AllCoinsTableItem.propTypes = {
  coin: PropTypes.object,
};

export default AllCoinsTableItem;
