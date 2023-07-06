import PropTypes from "prop-types";
import { ButtonStyle } from "./ButtonStyle";
const Button = ({
  buttonText,
  backgroundcolor,
  padding,
  borderradius,
  border,
  color,
  fontSize,
}) => {
  return (
    <ButtonStyle
      padding={padding}
      borderradius={borderradius}
      border={border}
      color={color}
      fontSize={fontSize}
      backgroundcolor={backgroundcolor}
    >
      {buttonText}
    </ButtonStyle>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  backgroundcolor: PropTypes.string,
  padding: PropTypes.string,
  borderradius: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string
};

export default Button;
