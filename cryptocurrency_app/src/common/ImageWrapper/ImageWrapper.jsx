import PropTypes from 'prop-types'
const ImageWrapper = ({image}) => {
  return (
    <div className='col-lg-6 col-12 mb-4 mb-lg-0'>
      <img src={image} alt="" className='img-fluid rounded'/>
    </div>
  )
}

ImageWrapper.propTypes = {
  image: PropTypes.string
}

export default ImageWrapper