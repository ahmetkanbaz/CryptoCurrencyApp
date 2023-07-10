import PropTypes from 'prop-types'
const SingleStatisticCard = ({statisticsData}) => {
  const {image, value, subTitle} = statisticsData
  return (
    <div className="p-5 text-center col">
      <img src={image} alt="Statistic Image" className='img-fluid mb-3'/>
      <h4 className='display-4 fw-bold'>{value}</h4>
      <p className='text-info fs-5'>{subTitle}</p>
    </div>
  );
};

SingleStatisticCard.propTypes = {
  statisticsData: PropTypes.object
}

export default SingleStatisticCard;
