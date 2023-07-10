import PropTypes from "prop-types";
const SingleCardWhyUs = ({ singleWhyUs }) => {
  const { image, cardTitle } = singleWhyUs;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="d-flex align-items-start">
        <img src={image} alt="singleWhyUsImage" className="img-fluid" />
        <div className="ps-4">
          <h5 className="mb-3">{cardTitle}</h5>
          <span className="opacity-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            suscipit incidunt placeat. Repellat, et voluptatibus.
          </span>
        </div>
      </div>
    </div>
  );
};

SingleCardWhyUs.propTypes = {
  singleWhyUs: PropTypes.object,
};

export default SingleCardWhyUs;
