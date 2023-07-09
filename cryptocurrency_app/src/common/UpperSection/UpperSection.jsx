import PropTypes from 'prop-types'
const UpperSection = ({title, subTitle}) => {
  return (
    <div className="text-center">
      <h1 className="display-6 fw-bold">{title}</h1>
      <p className="fs-5 text-info mb-5">{subTitle}</p>
    </div>
  )
}

UpperSection.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default UpperSection