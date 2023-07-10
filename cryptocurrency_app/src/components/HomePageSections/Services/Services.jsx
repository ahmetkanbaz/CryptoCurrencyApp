import UpperSection from "../../../common/UpperSection/UpperSection";
import { BackgroundStyle } from "../../../common/BackgroundStyle/BackgroundStyle";
import SingleCardServices from "./SingleCardServices/SingleCardServices";

const Services = () => {
  const servicesDatas = [
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-7.png",
      title: "Currency Wallet",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-3.png",
      title: "Currency Transaction",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-9.png",
      title: "Bitcoin Investment",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-5.png",
      title: "Currency Exchange",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-2.png",
      title: "Bitcoin Escrow",
    },
    {
      image:
        "https://demo.htmlcodex.com/2597/free-cryptocurrency-website-template/img/icon-8.png",
      title: "Token Sale",
    },
  ];
  return (
    <div className="py-5">
      <BackgroundStyle className="container py-5 px-4">
        <div className="py-5">
          <UpperSection
            title="Services"
            subTitle="Buy, Sell And Exchange Cryptocurrency"
          />
          <div className="row g-4">
            {servicesDatas.map((singleService, index) => (
              <SingleCardServices key={index} singleService={singleService} />
            ))}
          </div>
        </div>
      </BackgroundStyle>
    </div>
  );
};

export default Services;
