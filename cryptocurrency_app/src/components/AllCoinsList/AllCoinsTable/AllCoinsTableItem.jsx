import PropTypes from "prop-types";
const AllCoinsTableItem = ({ coin }) => {
  console.log(coin);
  const { id, image, name, symbol, current_price, market_cap_rank } = coin;
  return (
    <tr>
      <td>{market_cap_rank}</td>
      <td className="d-flex align-items-center gap-2">
        <img src={image} alt={id} className="img-fluid" width="20px" />
        <span className="fw-bold">{name}</span>
        <span className="text-uppercase">{symbol}</span>
      </td>
      <td>
        {current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td>0</td>
      <td>0</td>
      <td>-1.0</td>
      <td>15.47.</td>
      <td>594.868.</td>
    </tr>
  );
};

AllCoinsTableItem.propTypes = {
  coin: PropTypes.object,
};

export default AllCoinsTableItem;
