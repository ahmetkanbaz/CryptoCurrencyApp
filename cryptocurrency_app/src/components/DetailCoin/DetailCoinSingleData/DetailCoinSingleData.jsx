import PropTypes from 'prop-types'
const DetailCoinSingleData = ({data}) => {
  return (
    <div className="col-md-4 col-12">
      <div className="d-flex align-items-center justify-content-between border-bottom py-3">
        <span className="opacity-50">{data.title}</span>
        <span>{data.value}</span>
      </div>
    </div>
  );
};

DetailCoinSingleData.propTypes = {
  data: PropTypes.object
}

export default DetailCoinSingleData;
