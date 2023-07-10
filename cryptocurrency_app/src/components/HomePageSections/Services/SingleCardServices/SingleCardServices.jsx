import PropTypes from "prop-types";
import { SingleService } from "./SingleCardServiceStyle";
import { AiOutlineArrowRight } from "react-icons/ai";
const SingleCardServices = ({ singleService }) => {
  const { image, title } = singleService;
  return (
    <SingleService className="col-lg-4 col-md-6 col-12">
      <div className="p-5 bg-white position-relative overflow-hidden">
        <div className="position-absolute servicesAbsolute"></div>
        <img src={image} alt="" className="img-fluid mb-4" />
        <h5 className="mb-3">{title}</h5>
        <p className="opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime
          distinctio, mollitia labore cum aperiam?
        </p>
        <div className="d-flex gap-2 align-items-center">
          <a href="#" className="text-decoration-none text-info">
            Read More
          </a>
          <AiOutlineArrowRight className="text-info" cursor='pointer'/>
        </div>
      </div>
    </SingleService>
  );
};

SingleCardServices.propTypes = {
  singleService: PropTypes.object,
};

export default SingleCardServices;
