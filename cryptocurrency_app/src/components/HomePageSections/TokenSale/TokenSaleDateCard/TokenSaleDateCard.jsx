/* eslint-disable react/prop-types */
import { BackgroundStyle } from "../../../../common/BackgroundStyle/BackgroundStyle";
import {useSelector} from 'react-redux'

const TokenSaleDateCard = ({ date }) => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <div className="row">
      <div className="col-md-4 col-12 text-center">
        <BackgroundStyle className="py-4 rounded" theme={theme}>
          <h1>{date.getHours()}</h1>
          <span className="text-info">Hours</span>
        </BackgroundStyle>
      </div>
      <div className="col-md-4 col-12 my-lg-0 my-3 text-center">
        <BackgroundStyle className="py-4 rounded" theme={theme}>
          <h1>{date.getMinutes()}</h1>
          <span className="text-info">Minutes</span>
        </BackgroundStyle>
      </div>
      <div className="col-md-4 col-12 text-center">
        <BackgroundStyle className="py-4 rounded" theme={theme}>
          <h1>{date.getSeconds()}</h1>
          <span className="text-info">Seconds</span>
        </BackgroundStyle>
      </div>
    </div>
  );
};

export default TokenSaleDateCard;
