import ImageWrapper from "../../../../common/ImageWrapper/ImageWrapper";
import { HeroBannerStyle } from "../HomeBannerStyle";
import HeroBannerInfo from "./HeroBannerInfo/HeroBannerInfo";
import homeHeroBanner from '../../../../assets/banner/homeHeroBanner.png'
const HeroBanner = () => {
  return (
    <HeroBannerStyle className="py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <HeroBannerInfo />
          <ImageWrapper image={homeHeroBanner} />
        </div>
      </div>
    </HeroBannerStyle>
  );
};

export default HeroBanner;
