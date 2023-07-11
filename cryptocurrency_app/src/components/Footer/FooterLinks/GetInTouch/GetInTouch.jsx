import { FaMapMarkerAlt } from "react-icons/fa";
import {AiFillPhone} from 'react-icons/ai'
import {BsFillEnvelopeFill} from 'react-icons/bs'
const GetInTouch = () => {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <h5 className="mb-4">Get In Touch</h5>
      <div className="d-flex gap-3 align-items-center opacity-50">
        <FaMapMarkerAlt size='1.2rem'/>
        <span>123 Street, New York, USA</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50 my-3">
        <AiFillPhone size='1.2rem'/>
        <span>+012 345 67890</span>
      </div>
      <div className="d-flex gap-3 align-items-center opacity-50 my-3">
        <BsFillEnvelopeFill size='1.2rem'/>
        <span>info@example.com</span>
      </div>
    </div>
  );
};

export default GetInTouch;
