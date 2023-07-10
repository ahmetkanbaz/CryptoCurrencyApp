import PropTypes from "prop-types";
import { ButtonStyle } from "./ButtonStyle";
const Button = ({
  buttonText,
  backgroundcolor,
  padding,
  border,
  color,
  fontSize,
  classname,
}) => {
  return (
    <ButtonStyle
      padding={padding}
      border={border}
      color={color}
      fontSize={fontSize}
      backgroundcolor={backgroundcolor}
      className={classname}
    >
      {buttonText}
    </ButtonStyle>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  backgroundcolor: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  classname: PropTypes.string
};

export default Button;
