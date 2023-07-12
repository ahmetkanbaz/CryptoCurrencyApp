import PropTypes from "prop-types";
import { SingleService } from "./SingleCardServiceStyle";
import { AiOutlineArrowRight } from "react-icons/ai";
import {useSelector} from 'react-redux'
const SingleCardServices = ({ singleService }) => {
  const { image, title } = singleService;
  const theme = useSelector((state) => state.theme.theme)
  return (
    <SingleService className="col-lg-4 col-md-6 col-12" theme={theme}>
      <div className="p-5 position-relative overflow-hidden singleServiceCard">
        <div className="position-absolute servicesAbsolute"></div>
        <img src={image} alt="" className="img-fluid mb-4" />
        <h5 className="mb-3">{title}</h5>
        <p className="opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos maxime
          distinctio, mollitia labore cum aperiam?
        </p>
        <div>
          <a href="#" className="text-decoration-none text-info d-flex gap-2 align-items-center">
            Read More
            <AiOutlineArrowRight className="text-info" />
          </a>
        </div>
      </div>
    </SingleService>
  );
};

SingleCardServices.propTypes = {
  singleService: PropTypes.object,
};

export default SingleCardServices;
