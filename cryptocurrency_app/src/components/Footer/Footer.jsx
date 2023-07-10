import {BackgroundStyle} from '../../common/BackgroundStyle/BackgroundStyle'
import FollowUs from './FooterLinks/FollowUs/FollowUs';
import GetInTouch from './FooterLinks/GetInTouch/GetInTouch';
import OurServices from './FooterLinks/OurServices/OurServices';
import QuickLinks from './FooterLinks/QuickLinks/QuickLinks';
import FooterInfo from './FooterTop/FooterInfo';
import FooterNewsletter from './FooterTop/FooterNewsletter';
import {FooterWrapper} from './FooterStyle'
import FooterBottom from './FooterBottom/FooterBottom';
const Footer = () => {
  return (
    <BackgroundStyle className="pt-5">
      <FooterWrapper className="container pt-5">
        <div className="row align-items-center">
          <FooterInfo />
          <FooterNewsletter />
        </div>
        <div className="row py-5">
          <GetInTouch />
          <OurServices />
          <QuickLinks />
          <FollowUs />
        </div>
        <div className="pt-4 pb-3 border-top">
          <FooterBottom />
        </div>
      </FooterWrapper>
    </BackgroundStyle>
  );
};

export default Footer;
