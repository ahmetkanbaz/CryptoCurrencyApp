import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";
const AboutCryptoInfoList = ({ content }) => {
  return (
    <div className="d-flex gap-2 align-items-center mb-2">
      <div className="bg-secondary rounded-circle d-flex p-2">
        <AiOutlineCheck color="#FFFFFF" />
      </div>
      <p className="mb-0">{content}</p>
    </div>
  );
};

AboutCryptoInfoList.propTypes = {
  content: PropTypes.string,
};

export default AboutCryptoInfoList;
