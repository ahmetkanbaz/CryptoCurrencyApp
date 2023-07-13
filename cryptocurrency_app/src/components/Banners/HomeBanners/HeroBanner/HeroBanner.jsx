import ImageWrapper from "../../../../common/ImageWrapper/ImageWrapper";
import { BackgroundStyle } from "../../../../common/BackgroundStyle/BackgroundStyle";
import HeroBannerInfo from "./HeroBannerInfo/HeroBannerInfo";
import homeHeroBanner from '../../../../assets/banner/homeHeroBanner.png'
import {useSelector} from 'react-redux'
const HeroBanner = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <BackgroundStyle className="py-5" theme={theme}>
      <div className="container py-5">
        <div className="row align-items-center">
          <HeroBannerInfo />
          <ImageWrapper image={homeHeroBanner} />
        </div>
      </div>
    </BackgroundStyle>
  );
};

export default HeroBanner;
